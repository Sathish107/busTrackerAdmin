import Table from "./Table"

const Main=({buses})=>{
    return(
        <main>
            {
                (buses.length)?
                <Table buses={buses}/>:
                <p
                    style={{
                        marginTop:"1rem",
                        textAlign:"center"
                    }}
                >No buses found</p>
            }
        </main>
    )
}

export default Main