
import '../App.css';
import ListItems from './listItems';
import { React, useEffect, useState } from "react";
import axios from "axios";

const fetchHandler = async () => {
    return await axios.get("http://13.251.156.158:3005/api/get")
        .then((res) => res.data)
        .then((data) => console.log(data.data))
        .catch((err) => console.log(err));
};
function List() {
    const [checked, setChecked] = useState(false)
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchHandler().then((res) => setTodos(res.data))
    }, []);
    return (

        <div className='mainContent'>
            <div className="header">
                <h1>My ToDo list</h1>
                <a>0/6</a>
            </div>
            <ul className='mainList'>
                {todos.map((todo, i) => {
                    <label className='list'>
                        <div className='list-item'>
                            <input type="checkbox" onClick={() => { setChecked(!checked) }} />
                            <p className={checked ? "checked" : ""}>
                                {todo.task_name}
                            </p>
                        </div>
                        <ul className='icon'>
                            <img className={checked ? "icons displayNone" : "icons"} src="/icons/pencil.svg" alt="" />
                            <img className='icons' src="/icons/trash-can.svg" alt="" />
                        </ul>
                    </label>
                })}
                <input type="text" placeholder='what is next ??' className='input'></input>
            </ul>
            <button>Add task</button>
        </div >


    );
}

export default List;
