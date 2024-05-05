// NewTaskForm.js

import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]); // Initialize category with the first category

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new task object
    const newTask = { text, category };
    // Call the onTaskFormSubmit callback with the new task object
    onTaskFormSubmit(newTask);
    // Reset the form fields
    setText('');
    setCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter task"
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map(cat => (
            cat !== "All" && (
              <option key={cat} value={cat}>{cat}</option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;