import React from "react";
import Task from "./Task";

function TaskList({tasks, setTaskList}) {
  function handleClick(deletedTaskText){
    const tasklistToDisplay = tasks.filter((task) => task.text !== deletedTaskText);
    setTaskList(tasklistToDisplay);
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) =>
        <Task
          key={task.text}
          id={task.text}
          text={task.text}
          category={task.category}
          handleClick={handleClick}
        />
        )
      }
    </div>
  );
}

export default TaskList;