import Title from "../components/title.tsx";
import MainNaviBar from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import EditTodo from "../layouts/EditTodo.tsx";
import AddTodoButton from "../components/addTodoButton.tsx";
import type {FullTodoType} from "../types/types.ts";
import {useParams} from "react-router-dom";


type TodoEditProps = {
    todos: FullTodoType[]
    reloadTodos: ()=>void,
}
export default function TodoEdit(props:TodoEditProps){
    const todoId = useParams();
    return(
        <>
            <header className="">
                <Title/>
                <MainNaviBar/>
            </header>
            <main className="m-2">
                <div className="flex flex-row justify-evenly">
                    <h1>Todo Details</h1>
                    <AddTodoButton/>
                </div>
                {props.todos.filter((t:FullTodoType) => (t.id === todoId.id)).map((t:FullTodoType) =>
                    <EditTodo
                        key={t.id}
                        todo={t}
                        reloadTodos={props.reloadTodos}
                    />)}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}