import type {FullTodoType} from "../types/types.ts";
import {useNavigate} from "react-router-dom";
import axios from "axios";

type TodoCardProp = {
    todo: FullTodoType,
    showDetails: boolean,
    reloadTodos:()=>void,
    className?:string,
}

export default function TodoCard(prop:TodoCardProp){
    const navigateTo = useNavigate();

    function handleDetails(){
        navigateTo("/"+prop.todo.id);
    }
    function handleEdit(){
        navigateTo("/edit/"+prop.todo.id);
    }

    function handleDelete(){
        axios.delete("api/todo/"+prop.todo.id)
            .then(prop.reloadTodos)
            .catch((error)=> console.log(error))
        navigateTo("/");
    }

    return(
        <>
            <div className={prop.className}>
                <span className="m-1">Description: </span>
                <span className="p-2">{prop.todo.description}</span>
                <span className="m-1">Status: {prop.todo.status}</span>
                <div className="flex flex-row p-1 mt-2 border-1  rounded-xl">
                    {
                        prop.showDetails ?
                            (
                                <button className="pt-1 pb-1 pr-3 pl-3 mr-1"
                                     onClick={handleDetails}
                                >
                                    details
                                </button>
                            )
                            :<div></div>
                    }
                    <button className="pt-1 pb-1 pr-3 pl-3 mr-1" onClick={handleEdit}>edit</button>
                    <button className="pt-1 pb-1 pr-3 pl-3" onClick={handleDelete}>delete</button>
                </div>
            </div>
        </>
    )
}