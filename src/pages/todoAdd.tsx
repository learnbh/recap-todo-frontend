import Title from "../components/title.tsx";
import MainNaviBar from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import AddTodo from "../layouts/AddTodo.tsx";


export default function TodoAdd(){
    return(
        <>
            <header className="">
                <Title/>
                <MainNaviBar/>
            </header>
            <main className="m-2">
                <AddTodo
                    descriptionPlaceholder="Enter the description here!"
                    statusPlaceholder="Choose a status!"
                />
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}