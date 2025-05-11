export type FullTodoType = {
    id:string,
    description:string,
    status:string
};

export type DescriptionType = {
    description:string,
}
export type StatusType = {
    status:string
}
export type TodoType = {
    description:string,
    status:string
};

export type TodoStatus = "OPEN" | "IN_PROGRESS" | "DONE";

export const TodoStatusAll:TodoStatus[] =
    ["OPEN", "IN_PROGRESS", "DONE"];