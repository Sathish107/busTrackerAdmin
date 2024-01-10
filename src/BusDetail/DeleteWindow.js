const DeleteWindow=({setIsClicked,handleDelete})=>{
    return(
        <div className="delete-window">
            <div>
                <p>Do you want to delete?</p>
                <button 
                    className="addButton first-button"
                    onClick={()=>setIsClicked(false)}
                >cancel</button>

                <button 
                    className="addButton "
                    onClick={()=>handleDelete()}
                >delete</button>
            </div>
        </div>
    )
}

export default DeleteWindow