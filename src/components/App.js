import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onSelectCategory={handleCategorySelect}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;