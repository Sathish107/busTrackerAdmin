const Button=({handleSubmit})=>{
    return(
        <button 
            className="addButton"
            type="submit"
            onClick={(e)=>handleSubmit(e)}
        >Add Route</button>
    )
}

export default Button