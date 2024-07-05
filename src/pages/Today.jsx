import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTaskButton from "@/components/AddTaskButton";

const TodayPage = () => {
  const [tasks, setTasks] = useState([
    { id: 3, title: "Task 3", dueDate: "2023-10-03", completed: false },
    { id: 4, title: "Task 4", dueDate: "2023-10-03", completed: false },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <AddTaskButton addTask={addTask} />
    </div>
  );
};

export default TodayPage;