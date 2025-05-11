type Props = {
    title:string
}
export default function Title(props:Props){
    return(
        <>
            <div className="p-3 w-full">
                <h1>{props.title}</h1>
            </div>
        </>
    )
}