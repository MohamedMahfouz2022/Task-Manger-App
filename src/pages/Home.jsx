import { useState, useEffect } from "react";

import TaskSummary from "../Components/TaskSummary";
import Tasks from "../Components/Tasks/Tasks";

function Home() {
  //-------------------------------------------------------------------
  // Get Data From API
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  //-------------------------------------------------------------------

  return (
    <section className="grid grid-cols-1 md:grid-cols-10 gap-5 pt-20 px-5 h-screen bg-lightestBackground">
      {/* Tasks */}
      <Tasks tasks={tasks} />

      {/* TaskSummary */}
      <TaskSummary tasks={tasks} />
    </section>
  );
}

export default Home;
