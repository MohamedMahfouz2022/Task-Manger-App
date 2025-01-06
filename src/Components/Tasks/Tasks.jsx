import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  const [massage, setMassage] = useState(false);
  const [massageDeleteErorr, setMassageDeleteErorr] = useState(false);
  //-------------------------------------------------------------------
  // Delete Task
  const handleDelete = (id) => {
    fetch(`${"http://localhost:4000/tasks"}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setMassage(true);
        console.log(data);
      })
      .catch((error) => {
        setMassageDeleteErorr(true);
        console.log(error);
      });
    setTimeout(() => {
      setMassage(false);
      setMassageDeleteErorr(false);
    }, 1000);
  };
  //-------------------------------------------------------------------

  return (
    <div className="col-span-1 md:col-span-7 h-full overflow-y-auto ">
      <div className="flex flex-col p-5 gap-5">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              id={task.id}
              task_name={task.task_name}
              content={task.content}
              numOfTask={index + 1}
              type={task.type}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p>No tasks</p>
        )}
      </div>
      {massage && (
        <div className="w-[200px] h-[80px] fixed bottom-5 right-5 bg-green-500/70 text-white px-4 py-2 rounded-lg shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750] flex justify-center items-center text-2xl">
          Deleted
        </div>
      )}
      {!massage && massageDeleteErorr && (
        <div className="w-[200px] h-[80px] fixed bottom-5 right-5 bg-red-500/70 text-white px-4 py-2 rounded-lg shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750] flex justify-center items-center text-2xl">
          Erorr Delete
        </div>
      )}
    </div>
  );
};

export default Tasks;
