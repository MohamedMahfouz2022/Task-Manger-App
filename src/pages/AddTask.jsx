import React, { useState } from "react";

const AddTask = () => {
  const [massage, setMassage] = useState(false);
  const [formData, setFormData] = useState({
    taskName: "",
    taskType: "",
    taskDescription: "",
  });
  //-------------------------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //-------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    //-----------------------------------------
    setMassage(true);
    const task = {
      task_name: formData.taskName,
      content: formData.taskDescription,
      type: formData.taskType,
    };
    //-----------------------------------------
    fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(setMassage(true));
    setTimeout(() => {
      setMassage(false);
    }, 2500);
  };
  //-------------------------------------------------------------------
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full h-screen flex justify-center items-center bg-lightestBackground"
      >
        <div className="w-[500px] h-max bg-cardBackground shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750] rounded-md font-bold text-lg text-colorFont p-9 space-y-3 relative">
          <div className="w-full font-bold text-2xl text-colorFont flex justify-center">
            <span>Write Task</span>
          </div>
          <div>
            {/* name */}
            <label htmlFor="taskName" className="block mb-2">
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={formData.taskName}
              onChange={handleChange}
              placeholder="Enter Name Task"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            {/* type of task */}
            <label htmlFor="taskType" className="block mb-2">
              Type of Task
            </label>
            <select
              id="taskType"
              name="taskType"
              value={formData.taskType}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose type of task</option>
              <option value="Design">Design</option>
              <option value="Testing">Testing</option>
              <option value="Documentation">Documentation</option>
              <option value="Deployment">Deployment</option>
              <option value="Development">Development</option>
            </select>
          </div>
          <div>
            <label htmlFor="taskDescription" className="block mb-2">
              Task Description
            </label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              placeholder="Write Task"
              className="w-full h-[150px] text-colorFont bg-secondaryBackground shadow-[inset_-3px_-3px_10px_#fff,inset_5px_5px_10px_#0d2750] rounded-md p-5 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
      {massage && (
        <div className="w-[200px] min-w-max h-[80px] fixed bottom-5 right-5 bg-green-500/70 text-white px-4 py-2 rounded-lg shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750] flex justify-center items-center text-2xl">
          Added successfully
        </div>
      )}
    </>
  );
};

export default AddTask;
