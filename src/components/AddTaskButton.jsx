import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TaskForm from "@/components/TaskForm";

const AddTaskButton = ({ addTask }) => {
  const [open, setOpen] = useState(false);

  const handleAddTask = (task) => {
    addTask(task);
    setOpen(false);
  };

  return (
    <div className="mt-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>
          <TaskForm onSubmit={handleAddTask} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTaskButton;