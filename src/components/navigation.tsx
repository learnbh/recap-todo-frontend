import {Link} from "react-router-dom";

export default function MainNaviBar(){
    return(
        <>
            <div className="flex-row justify-between">
                <Link to={"/"}>all todos</Link>
            </div>
        </>
    )
}