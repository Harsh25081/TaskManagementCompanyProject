import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CreateTask = () => {
    let [Title, setTitle] = useState("")
    let [Description, setDescription] = useState("")
    let [Deadline, setDeadline] = useState("")
    let [create, setCreate] = useState("")
    let [error, setError] = useState("")
    let navigate = useNavigate()

    const onSubmit = (e) => {
        axios.post("http://localhost:3001/createtask", { Title, Description, Deadline })
            .then((res) => { console.log(res.data); setCreate(res.data) })
            .catch((err) => { console.log(err.message); setError(err.message) })
        e.preventDefault();
    }

    useEffect(()=>{
        
                if(create !== "" ) {alert("Created Successfully!");}
                if(create !== "" ){ navigate("/");}
                
    },[create,navigate])

    return (
        <div style={{ border: "2px solid black",margin:"auto", width: "35%", "textAlign": "center" }}>
            <form onSubmit={(e) => onSubmit(e)}>
            {create.message !== "Created Successfully" && <p>{create.message}</p>}
            {error !== "" && <p>{error}</p>}
                <h2>Create Task</h2>
                <div className="mb-2">
                    <input type="text" required placeholder="Title" onChange={(e) => { setTitle(e.target.value) }}></input>
                </div>
                <div className="mb-2">
                    <input type="text" required placeholder="Description" onChange={(e) => { setDescription(e.target.value) }}></input>
                </div>
                <div className="mb-2">
                    <input style={{ width: "190px" }} type="Date" required placeholder="Deadline" onChange={(e) => { setDeadline(e.target.value) }}></input>
                </div>
                <button className="btn btn-info mb-2">Create</button>
            </form>
        </div>


    )
}

export default CreateTask