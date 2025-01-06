const TaskSummary = ({ tasks }) => {
  if (tasks) {
    // حساب عدد المهام
    var totalTasks = tasks.length;

    // حساب عدد المهام المكتملة وغير المكتملة
    var completedTasks = tasks.filter((task) => task.completed).length;
    var incompleteTasks = totalTasks - completedTasks;

    // حساب عدد كل نوع من المهام
    var taskTypes = tasks.reduce((acc, task) => {
      acc[task.type] = (acc[task.type] || 0) + 1;
      return acc;
    }, {});
  }

  return (
    <div className="col-span-1 md:col-span-3  bg-cardBackground shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750] rounded-md p-6 space-y-6 text-colorFont">
      <h1 className="text-2xl font-bold text-center">Task Summary</h1>
      <div className="grid grid-cols-2 gap-3 text-lg font-semibold">
        <div className="bg-secondaryBackground p-3 rounded-md shadow-md text-center">
          <p>Total Tasks</p>
          <p className="text-lg text-darkestText">{totalTasks}</p>
        </div>
        <div className="bg-secondaryBackground p-3 rounded-md shadow-md text-center">
          <p>Completed </p>
          <p className="text-lg text-darkestText">{completedTasks}</p>
        </div>
        <div className="bg-secondaryBackground p-3 rounded-md shadow-md text-center">
          <p>Incomplete </p>
          <p className="text-lg text-darkestText">{incompleteTasks}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Task Types</h2>
        <div className="grid grid-cols-2 gap-3">
          {taskTypes &&
            Object.entries(taskTypes).map(([type, count]) => (
              <div
                key={type}
                className="bg-secondaryBackground p-3 rounded-md shadow-md text-center"
              >
                <p>{type}</p>
                <p className="text-2xl text-darkestText">{count}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
