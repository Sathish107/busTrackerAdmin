import Form from "./Form"

const Main=({buses,id})=>{
    return(
        <main className="AddBus-main">
            <Form 
                buses={buses}
                id={id}
            />
        </main>
    )
}

export default Main