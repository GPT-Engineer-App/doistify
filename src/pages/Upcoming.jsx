import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTaskButton from "@/components/AddTaskButton";

const UpcomingPage = () => {
  const [tasks, setTasks] = useState([
    { id: 5, title: "Task 5", dueDate: "2023-10-04", completed: false },
    { id: 6, title: "Task 6", dueDate: "2023-10-05", completed: false },
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
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <AddTaskButton addTask={addTask} />
    </div>
  );
};

export default UpcomingPage;