import { useCallback, useEffect, useState } from "react"
import SearchTask from "./SearchTask"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import Modal from "./Modal";
import EmptyPage from "./EmptyPage";

function TaskBoard() {

  //!Creating a dummy obj Make sure keys and values are inside quote just like JSON data... 
  const defaultTask = {
    "id":crypto.randomUUID(),
    "title": "Integration API",
    "desc":"Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    "tags":['Web','Python','API'],
    "priority":"High",
    "isFavorite": true,
  }
  const [tasks, setTasks] = useState([defaultTask]);
  const [editTask, setEditTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  


  function handleAddEditTask(e,newTask, isAddTask){
      e.preventDefault();
      if(isAddTask){
        setTasks([...tasks, newTask])
      }else{
        setTasks(tasks.map(task=>{
          if(task.id === newTask.id){
            return newTask
          }else{
            return task
          }
          
        }))
      }
      setShowModal(false)
      setEditTask(null)
    }

  function handleEditTask(task){
    setEditTask(task);
    setShowModal(true);
  }

  function modalClose(){
    setShowModal(false);
    setEditTask(null);
  }

  function handleDeleteTask(id){
      setTasks(tasks.filter(task => task.id !== id))
  }
  function handleDeleteAll(){
      tasks.length = 0;
      setTasks([...tasks])
  }

  //! Better Way 
  function handleFavorite(id){
    const findIdx = tasks.findIndex(task => task.id === id);
    const newArray = [...tasks];
    newArray[findIdx].isFavorite = !newArray[findIdx].isFavorite;
    setTasks(newArray);
  }

  //! Average way 
  // function handleFavorite(id){
  //   console.log(id)

  //   setTasks(tasks.map(task=>{
  //     if(task.id === id){
  //       return {...task, isFavorite: !task.isFavorite}
  //     }else{
  //       return task
  //     }
      
  //   }))
  // }


  //! Avg but better way 
  function handleSearch(searchValue){
    const filteredData = tasks.filter(data => data.title.toLowerCase().includes(searchValue.toLowerCase()));
    setTasks([...filteredData]);
  }

  //! Avg novice Way 
  // function handleSearch(searchValue){
  //   const filteredData = tasks.filter(data => data.title.toLowerCase() === searchValue.toLowerCase());
  //   setTasks([...filteredData]);
  // }

  return (
    <>
      {
        showModal && <Modal addTask={handleAddEditTask} onCloseClick={modalClose} editTask={editTask}/>
      }
      <div className="p-2 flex justify-end w-11/12 mx-auto">
      <SearchTask onSearch={handleSearch}/>
      </div>
      <section className="rounded-xl bg-[#1D212B]/[10%] px-6 py-8 md:px-9 md:py-16 w-11/12 mx-auto mb-20">
          <TaskActions onAddClick={()=>setShowModal(true)} onDeleteAll={handleDeleteAll}/>

          <section className="overflow-visible">
           {
            tasks.length ? <TaskList toggleFavorite={handleFavorite} tasks={tasks} editTask={handleEditTask} deleteTask={handleDeleteTask}/> : <EmptyPage/>
           }
          </section>
      </section>

    </>
  )
}

export default TaskBoard