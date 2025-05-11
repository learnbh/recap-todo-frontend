import axios from "axios";
import type {AddDescriptionType, AddStatusType, AddTodoType} from "../types/types.ts";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type AddTodoProp = {
    descriptionPlaceholder:string,
    statusPlaceholder:string
}


export default function AddTodo(prop:AddTodoProp){
    const navigateTo = useNavigate();

    const [description, setDescription] = useState<AddDescriptionType>({
        description: ""
    });
    const [status, setStatus] = useState<AddStatusType>({
        status: ""
    });
    function handleChangeInput(e:ChangeEvent<HTMLInputElement>){
        setDescription({...description, [e.target.name]: (e.target.value).trim()});
    }
    function handleChangeSelect(e:ChangeEvent<HTMLSelectElement>){
        setStatus({...status, status: e.target.value});
    }
    function addTodo(){
        const newTodo:AddTodoType = {
            description: description.description,
            status: status.status
        }
        axios.post("/api/todo", newTodo).then(r=> console.log(r.data))
            .catch(error=> console.log(error))
    }
    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if ((description.description !== prop.descriptionPlaceholder || description.description !== "") &&
            (status.status !== prop.statusPlaceholder)) {
            addTodo();
            setDescription({
                description: prop.descriptionPlaceholder
            });
            setStatus({
                status: prop.statusPlaceholder
            });
            navigateTo("/");
        }
        else {
            if(description.description === prop.descriptionPlaceholder || description.description === "") {
                alert("Description is still missing: ");
            }
            else {
                alert("Status is still missing!");
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}
                  className="flex flex-col w-full"
            >
                <label>Description: </label>
                <input className="bg-gray-700 border-white border-2 border-solid rounded-xl p-5 m-5"
                       placeholder={prop.descriptionPlaceholder}
                       name="description"
                       id="description"
                       onChange={handleChangeInput}
                />
                <label>Status</label>
                <select className="bg-gray-700 border-white border-2 border-solid rounded-xl p-5 m-5"
                    onChange={handleChangeSelect}>
                    <option className="" value={""}>Choose a status</option>
                    <option value={"OPEN"}>Open</option>
                    <option value={"IN_PROGRESS"}>In progress</option>
                    <option value={"DONE"}>Done</option>
                </select>
                <button className="border-white border-2 border-solid rounded-xl"
                        type="submit"
                >
                    Add todo
                </button>
            </form>
        </div>
    )
}