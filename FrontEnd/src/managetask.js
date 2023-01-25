import { useEffect, useState } from "react";
// import { useDrag,useDrop } from "react-dnd";//===========================
import axios from "axios";

// import { DragDropContext,Draggable,Droppable } from "react-beautiful-dnd";


const ManageTask = () => {
    let [demo,setDemo]=useState([])
    let [error, setError] = useState("")

    

    const GetAllTasks = () => {
        axios.get("http://localhost:3001/gettask")
            .then((res) => { console.log(res.data); setDemo(res.data.data) })
            .catch((err) => { console.log(err.message); setError(err.message) })
    }
    useEffect(() => {
        GetAllTasks()
    }, [])

    // let test = data.map((item, index) => {
    //     let Open
    //     let Completed
    //     let inProg
    //     if (item.Status === "Open") {
    //         Open = item.Title
    //     }
    //     if (item.Status === "Work-In-Progress") {
    //         inProg = item.Title
    //     }
    //     if (item.Status === "Completed") {
    //         Completed = item.Title
    //     }
    //     return (<tr key={index}>
    //         <td>{Open}</td>
    //         <td>{inProg}</td>
    //         <td>{Completed}</td>
    //     </tr>)

    // })

    // const handleDragEnd = (results)=>{
    //     let temptask = [...data]
    //     if(results.source.droppableId==="Open"){
    //         let [selectedtask] = temptask.splice(results.source.index,1)
    //         temptask.splice(results.destination.index,0,selectedtask)
    //     }
    //     setData(temptask)   
    // }

    const dragstart=(e,Title,Status)=>{
        console.log("drag has started")
        e.dataTransfer.setData("Title",Title)
        e.dataTransfer.setData("Status",Status)
    }

    const draggingOver=(e)=>{
        e.preventDefault();
        console.log("Dragged Over now")
    }

    const dragDropped=(e,b)=>{
        console.log("You have Dropped")
        let Title = e.dataTransfer.getData("Title")
        let task = demo.filter((dem)=>{
            if(dem.Title===Title){
                dem.Status=b
            }
            return dem
        })
        setDemo(task)
    }
   
    const dragDroppedComp=(e,b)=>{
        console.log("You have Dropped")
        let Title = e.dataTransfer.getData("Title")
        let task = demo.filter((dem)=>{
            if(dem.Title===Title){
                dem.Status=b
            }
            return dem
        })
        setDemo(task)
    }

    return (
        <div>
            <div className="row" style={{border:"2px solid black",height:"500px",width:"90%"}}>
            {error !== "" && <p>{error}</p>}
           
                <div
                 className="center-block"
                 style={{width:"33.3%",float:"center",border:"2px solid black"}}
                 >
                    <label>Open</label>
                {demo.map((book,index)=>{
                    let {Title,Status,Deadline}=book
                    if(Status==="Open"){
                        return <div
                             key={index} style={{border:"2px solid black",margin:'5px'}}
                             draggable onDragStart={(e)=>dragstart(e,Title,Status)}>
                        <p style={{margin:"1px"}}>Title : {Title} <br/> Deadline :{Deadline.split("T")[0]}</p>
                    </div>
                    }else return ''
                    })}
                </div>

                <div 
                className="center-block" style={{width:"33.3%",float:"center",border:"2px solid black"}}
                onDragOver={(e)=>draggingOver(e)}
                onDrop={(e)=>dragDropped(e,"Work-In-Progress")}>
                <label>Work-In-Progress</label>
                {demo.map((book,index)=>{
                    let {Title,Status,Deadline}=book
                    if(Status==="Work-In-Progress"){
                        return <div
                             key={index} style={{border:"2px solid black",margin:'5px'}}
                             draggable onDragStart={(e)=>dragstart(e,Title)}>
                        <p style={{margin:"1px"}}>Title : {Title} <br/> Deadline :{Deadline.split("T")[0]}</p>
                    </div>
                    }else return ''
                    })}
                </div>

                <div 
                    className="center-block" style={{width:"33.3%",float:"center",border:"2px solid black"}}
                    onDragOver={(e)=>draggingOver(e)}
                    onDrop={(e)=>dragDroppedComp(e,"Completed")}>
                <label>Completed</label>
                {demo.map((book,index)=>{
                    let {Title,Status,Deadline}=book
                    if(Status==="Completed"){
                        return <div
                             key={index} style={{border:"2px solid black",margin:'5px'}}
                             draggable onDragStart={(e)=>dragstart(e,Title)}>
                        <p style={{margin:"1px"}}>Title : {Title} <br/> Deadline :{Deadline.split("T")[0]}</p>
                    </div>
                    }else return ''
                    })}
                </div>
        </div>
           
        </div>

    )
}

export default ManageTask