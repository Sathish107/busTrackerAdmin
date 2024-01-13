import Form from "./Form"

const Main=({routes,setBuses})=>{return(
        <main className="AddBus-main">
            <Form 
                routes={routes}
                setBuses={setBuses}
            />
        </main>
    )
}

export default Main