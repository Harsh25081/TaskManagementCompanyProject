 const handleDragEnd = (results)=>{
        let temptask = [...data]
        if(results.destination.droppableId==="Open"){
            let [selectedtask] = temptask.splice(results.source.index,1)
            temptask.splice(results.destination.index,0,selectedtask)
        }
        if(results.destination.draggableId==="Work-In-Progress"){
            let [selectedtask] = temptask.splice(results.source.index,1)
            selectedtask.Status="Work-In-Progress"
            temptask.splice(results.destination.index,0,selectedtask)
        }
        setData(temptask) 
        console.log(results)  
    }




    <DragDropContext onDragEnd={(results)=>handleDragEnd(results)}>
            <div className="center-block" style={{width:"33.3%",float:"left",border:"2px solid black"}}>
            <Droppable   droppableId="Open">
             {(provided)=>(
               <div  ref={provided.innerRef}{...provided.droppableProps}>
                <label>Open</label>
               {data?.map((item, index)=>(
                 <Draggable draggableId={item._id} index={index} key={item.Title}>
                 {(provided)=>(
                   <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                   <p style={{border:"2px solid black"}}>{item.Title}</p>
                 </div>
                 )}
                 </Draggable>
               ))}
             
               {provided.placeholder}
             </div>
             )}
              </Droppable>
            </div>

            <div className="center-block" style={{width:"33.3%",float:"center",border:"2px solid black"}}>
              <Droppable droppableId="Work-In-Progress">
              {(provided)=>(
            <div style={{height:"100%"}} ref={provided.innerRef}{...provided.droppableProps} {...provided.dragHandleProps}>
                <label>Work-In-Progress</label>

                {provided.placeholder}
            </div>
              )}
              </Droppable>
              </div>


              <div className="center-block" style={{width:"33.4%",float:"right",border:"2px solid black"}}>
              <Droppable droppableId="Completed">
              {(provided)=>(
            <div  ref={provided.innerRef}{...provided.droppableProps} {...provided.dragHandleProps}>
                <label>Completed</label>
                {provided.placeholder}
            </div>
              )}
              </Droppable>
              </div>
            </DragDropContext>