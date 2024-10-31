import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import randomColor from "../../../public/Scripts/randomColor";


function TaskList({tasks, editTask, deleteTask, toggleFavorite}){

  return (
    <>
      <table className='table-fixed overflow-auto xl:w-full'>
        <thead>
          <tr>
            <th className='p-4 pb-8 text-sm font-semibold capitalize w-[48px]'></th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize w-[300px]'>
              {" "}
              Title{" "}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize w-full'>
              {" "}
              Description{" "}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]'>
              {" "}
              Tags{" "}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>
              {" "}
              Priority{" "}
            </th>
            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task)=><tr key={task.id} className='border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'>
            <td>
              <button onClick={()=>toggleFavorite(task.id)}>
                {
                task.isFavorite? <FaStar fill="yellow"/>:<FaRegStar/>
                }
              </button>
            </td>
            <td>{task.title}</td>
            <td>
              <div>
                {task.desc}
              </div>
            </td>
            <td>
              <ul className='flex justify-center gap-1.5 flex-wrap'>
                {
                    task.tags.map((tag,index)=><li key={index}>
                    <span
                    style={{background:randomColor()}} 
                    className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}>
                      {tag}
                    </span>
                  </li>)
                }
              </ul>
            </td>
            <td className='text-center'>{task.priority}</td>
            <td>
              <div className='flex items-center justify-center space-x-3'>
                <button className='text-red-500' onClick={()=>deleteTask(task.id)}>Delete</button>
                <button className='text-blue-500' onClick={()=>editTask(task)}>Edit</button>
              </div>
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </>
  );
}

export default TaskList;
