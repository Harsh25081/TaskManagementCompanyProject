import { useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";

const UpdateTask=(Title,Status)=>{
    const GetAllTasks = (Title,Status) => {
        axios.put("http://localhost:3001/updatetask",{Title,Status})
            .then((res) => { console.log(res.data)})
            .catch((err) => { console.log(err.message)})
    }
    useEffect(() => {
        GetAllTasks()
    }, [])
    return(
        <Provider>
            <div>hello</div>
        </Provider>
    )
}

export default UpdateTask;