import axios from "axios";
import type {DescriptionType, FullTodoType, StatusType} from "../types/types.ts";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type TodoEditProps = {
    todo: FullTodoType
    getAllTodos: ()=>void,
}

export default function EditTodo(prop:TodoEditProps){
    const navigateTo = useNavigate();

    const [description, setDescription] = useState<DescriptionType>({
        description: prop.todo.description
    });
    const [status, setStatus] = useState<StatusType>({
        status: prop.todo.status
    });
    function handleChangeInput(e:ChangeEvent<HTMLInputElement>){
        setDescription({...description, [e.target.name]: (e.target.value).trim()});
    }
    function handleChangeSelect(e:ChangeEvent<HTMLSelectElement>){
        setStatus({...status, status: e.target.value});
    }
    function editTodo(){
        const editedTodo:FullTodoType = {
            id: prop.todo.id,
            description: description.description,
            status: status.status
        }
        axios.put("/api/todo/"+prop.todo.id+"/update", editedTodo).then(r=> console.log(r.data))
            .catch(error=> console.log(error))
    }
    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if ((description.description !== prop.todo.description && description.description !== "") ||
            status.status !== prop.todo.status) {
            editTodo();
            setDescription({description: prop.todo.description});
            setStatus({status: prop.todo.status});
            prop.getAllTodos();
            navigateTo("/");
        }
        else {
            alert("Nothing changed!");
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full pt-5  pb-5">
                    <label>Description: </label>
                    <input className="bg-gray-700 border-white border-2 border-solid rounded-xl p-5 m-5"
                           defaultValue={prop.todo.description}
                           name="description"
                           id="description"
                           onChange={handleChangeInput}
                    />
                    <label>Status</label>
                    <select className="bg-gray-700 border-white border-2 border-solid rounded-xl p-5 m-5"
                        onChange={handleChangeSelect}
                        defaultValue={prop.todo.status}
                    >
                        <option className="" value={""}>Choose a status</option>
                        <option value={"OPEN"}>Open</option>
                        <option value={"IN_PROGRESS"}>In progress</option>
                        <option value={"DONE"}>Done</option>
                    </select>
                    <button className="border-white border-2 border-solid rounded-xl"
                            type="submit"
                    >
                        Edit todo
                    </button>
                </div>
            </form>
        </div>
    )
}