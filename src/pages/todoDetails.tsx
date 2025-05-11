import Title from "../components/title.tsx";
import MainNaviBar from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import type {FullTodoType} from "../types/types.ts";
import TodoCard from "../layouts/TodoCard.tsx";
import {useParams} from "react-router-dom";
import AddTodoButton from "../components/addTodoButton.tsx";

type TodoDetailsProps = {
    todos: FullTodoType[]
}

export default function TodoDetails(props:TodoDetailsProps){
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
                <TodoCard
                    key={t.id}
                    todo={t}
                    showDetails={false}
                    className="w-full flex flex-col flex-wrap text-start content-between bg-blue-600 border-white border-2 border-solid p-5 m-3 rounded-xl"
                />)}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}