import Title from "../components/title.tsx";
import Footer from "../components/footer.tsx";
import AddTodoButton from "../components/addTodoButton.tsx";
import {type FullTodoType, type TodoStatus, TodoStatusAll} from "../types/types.ts";
import TodoStatusColumn from "../layouts/TodoStatusColumn.tsx";

type TodosProps= {
    todos: FullTodoType[]
    reloadTodos: ()=>void;
}

export default function Todos(props: TodosProps ){

    function getTodosWithStatus(status:TodoStatus):FullTodoType[]{
        return props.todos.filter((t:FullTodoType) => t.status === status)
    }
    return(
        <>
            <header className=" bg-blend-color bg-blue-800">
                <Title/>
            </header>
            <main className="p-2 bg-blue-700">
                <div className="flex flex-row justify-evenly">
                    <AddTodoButton/>
                </div>
                <div className=" flex flex-row flex-wrap m-5">
                    {TodoStatusAll.map((status:TodoStatus)=>
                        <TodoStatusColumn key={status}
                                          status={status}
                                          todos={getTodosWithStatus(status)}
                                          reloadTodos={props.reloadTodos}
                        />
                    )}
                </div>
            </main>
            <footer className="p-1 bg-blue-800">
                <Footer/>
            </footer>
        </>
    )
}