import { useState } from "react"
import { IoMdClose } from "react-icons/io";

function Modal({addTask, onCloseClick,editTask}) {
    const initialTask = {
        id: crypto.randomUUID(),
        title:"",
        desc:"",
        tags:[],
        priority:"",
        isFavorite:false,
    }
    const [task, setTask] = useState(editTask || initialTask);
    
    //? Checking Mode
    const [isAddTask] = useState(Object.is(editTask, null));




    function handleChange(e){
        e.preventDefault();
        let {name, value} = e.target;
        if(name === "tags"){
            value = value.split(",");
        }
        setTask(
            {...task,
            [name]:value}
        )
    }


  return (
    <>
    <section className="bg-black/50 absolute top-0 left-0 h-full w-full z-20 bottom-0">
        <form
      className="mx-auto fixed my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-50 left-1/2 top-[42%] -translate-y-1/2 -translate-x-1/2"
    >
    <button className="p-2 bg-gray-400/25 rounded-full" onClick={onCloseClick}><IoMdClose/></button>
      <h2
        className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
      >
       {isAddTask ? "Add Task" : "Edit Task"}
      </h2>

      <div className="space-y-9 text-white lg:space-y-10">
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="desc"
            id="desc"
            value={task.desc}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div
          className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
        >
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              value={task.tags}
            onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              value={task.priority}
            onChange={handleChange}
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center lg:mt-20">
        <button
          type="submit"
          onClick={(e)=>addTask(e,task, isAddTask)}
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          {isAddTask ? "Create Task" : "Update Task"}
        </button>
      </div>
    </form>
    </section>
    </>
  )
}

export default Modal