import Table from "./Table"

const Main=({buses,handleClick})=>{
    return(
        <main>
            {
                (buses.length)?
                <Table 
                    buses={buses}
                    handleClick={handleClick}

                />:
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