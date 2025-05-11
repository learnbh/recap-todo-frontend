import type {FullTodoType, TodoStatus} from "../types/types.ts";
import TodoCard from "./TodoCard.tsx";

export type Props = {
    status:TodoStatus,
    todos:FullTodoType[],
    reloadTodos: ()=>void;
}

export default function TodoStatusColumn(props:Props) {
    return (
        <>
            <div className="grid-cols-3">
                <h3>{props.status}</h3>
                {props.todos.map((t:FullTodoType)=><TodoCard
                    key={t.id}
                    todo={t}
                    showDetails={true}
                    reloadTodos={props.reloadTodos}
                    className="w-min flex flex-col flex-wrap text-start content-between bg-blue-600 border-white border-2 border-solid p-5 m-3 rounded-xl"
                />)}
            </div>
        </>
    );
}