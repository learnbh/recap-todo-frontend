import './App.css'
import {Route, Routes} from "react-router-dom";
import Todos from "./pages/todos.tsx";
import TodoAdd from "./pages/todoAdd.tsx";
import TodoDetails from "./pages/todoDetails.tsx";
import {useEffect, useState} from "react";
import type {FullTodoType} from "./types/types.ts";
import axios from "axios";
import TodoEdit from "./pages/todoEdit.tsx";

function App() {
    const [allTodos, setTodos] = useState<FullTodoType[]>();

    function getAllData(){
        axios.get("/api/todo")
            .then((response) => setTodos(response.data))
            .catch((error)=> console.log(error))
    }

    useEffect(() => (getAllData()), []);

    if(!allTodos){
        return "Load data ..."
    }

    return (
    <>
      <Routes>
          <Route path={"/"} element={<Todos todos={allTodos} reloadTodos={getAllData}/>}></Route>
          <Route path={"/add"} element={<TodoAdd reloadTodos={getAllData}/>}></Route>
          <Route path={"/edit/:id"} element={<TodoEdit todos={allTodos} reloadTodos= {getAllData}/>}></Route>
          <Route path={"/:id"} element={<TodoDetails todos={allTodos}/>}></Route>
      </Routes>
    </>
  )
}

export default App
