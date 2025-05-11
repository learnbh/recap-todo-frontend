import {useNavigate} from "react-router-dom";

export default function AddTodoButton(){
    const routeTo = useNavigate();

    function handleClick(){
        routeTo("/add");
    }

    return(
        <>
            <button className="pt-2 pb-2 pr-6 pl-6" onClick={handleClick}> Add new Todo</button>
        </>
    )
}