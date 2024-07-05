import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTaskButton from "@/components/AddTaskButton";

const InboxPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", dueDate: "2023-10-01", completed: false },
    { id: 2, title: "Task 2", dueDate: "2023-10-02", completed: false },
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
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <AddTaskButton addTask={addTask} />
    </div>
  );
};

export default InboxPage;