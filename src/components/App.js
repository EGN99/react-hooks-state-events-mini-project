import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    const [tasks, setTasks] = useState(TASKS);
    const [selectedCategory, setSelectedCategory] = useState("All");

      function handleAddTask(newTask){
    // Add new task to tasks state
    setTasks([
      ...tasks,
      newTask
    ])
  }  function handleAddTask(newTask){
    // Add new task to tasks state
    setTasks([
      ...tasks,
      newTask
    ])
  }

  const filteredTasks = tasks.filter((task) => selectedCategory==="All" ? true : task.category===selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter   categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />

      <NewTaskForm  categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}/>

      <TaskList   tasks={filteredTasks}
        setTasklist={setTasks} />
    </div>
  );
}

export default App;
