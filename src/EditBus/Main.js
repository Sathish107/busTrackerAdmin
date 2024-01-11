import Form from "./Form"

const Main=({buses,id})=>{
    return(
        <main className="AddBus-main">
            {(buses.length)?<Form 
                buses={buses}
                id={id}
            />:
            <p>Loading...</p>}
        </main>
    )
}

export default Main