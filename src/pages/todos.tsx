import Title from "../components/title.tsx";
import Footer from "../components/footer.tsx";
import AddTodoButton from "../components/addTodoButton.tsx";
import type {FullTodoType} from "../types/types.ts";
import TodoCard from "../layouts/TodoCard.tsx";
import MainNaviBar from "../components/navigation.tsx";

type TodosProps= {
    todos: FullTodoType[]
    getAllTodos: ()=>void;
}

export default function Todos(props: TodosProps ){
    return(
        <>
            <header className=" bg-blend-color bg-blue-800">
                <Title/>
                <MainNaviBar/>
            </header>
            <main className="p-2 bg-blue-700">
                <div className="flex flex-row justify-evenly">
                    <h1>All Todos</h1>
                    <AddTodoButton/>
                </div>
                <div className=" flex flex-row flex-wrap m-5">
                    {props.todos.map((t:FullTodoType)=><TodoCard
                        key={t.id}
                        todo={t}
                        showDetails={true}
                        className="w-min flex flex-col flex-wrap text-start content-between bg-blue-600 border-white border-2 border-solid p-5 m-3 rounded-xl"
                    />)}
                </div>
            </main>
            <footer className="p-1 bg-blue-800">
                <Footer/>
            </footer>
        </>
    )
}