import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add.js';
import ToDoList from "./ToDoList";
import AcUnitIcon from '@mui/icons-material/AcUnit';


const App = () => {

  const [task, setTask] = useState("")

  const [taskList, setTaskList] = useState([])

  const func = (event) => {
    setTask(event.target.value)
  }

  const update = () => {
    if(task !== "")
    {
      setTaskList( (old) =>{
        return [...old, task]
      } )
      setTask("")
    }
  }

  const deleteTask = (id) => {
    
    setTaskList((old) =>{
      return old.filter((arr, index) => {
        return index !== id
      })
    })
  }

  return (<>
    <div className="main_div">
      <div className="center_div">

        <br />
        <h1>ToDo List</h1>
        <br />

        <AcUnitIcon/>

        <input value = {task} type='text' placeholder="Add a task" onChange={func}></input>
        <Button className="newBtn" variant="outlined" onClick={update}><AddIcon /></Button>

        <br />
        <ol>
          {taskList.map((val, index) => {
            return <ToDoList text = {val} key = {index} func = {deleteTask}/>
          })}
        </ol>
        <br />

      </div>
    </div>

  </>)
}

export default App