import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const fetchHandler = async () => {
    return await axios
        .get("http://13.251.156.158:3005/api/get")
        .then((res) => res.data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

function listItems() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchHandler().then((data) => setTodos(data.data));
    }, []);

    return (
        <div className="App">
            {todos.map((data, i) => (
                <li>{data[i].task_name}</li>
            ))}
        </div>
    );
}

export default listItems;