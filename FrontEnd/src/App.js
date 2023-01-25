import {useNavigate} from "react-router-dom"

const App = ()=>{
    let navigate = useNavigate();
    
    return (
        <div>
        <p style={{color:"black"}}>This is the Task Management</p>
        <div className="btn-group" >
            <button className="btn btn-info" id="signup" onClick={()=>{navigate("/createtask")}}>Create Task</button>
            <button className="btn btn-warning" id="login" onClick={()=>{navigate("/managetask")}}>Manage Task</button>
        </div>
        </div>
    )
}

export default App