import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const TaskForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [dueDate, setDueDate] = useState(initialData.dueDate || new Date());
  const [description, setDescription] = useState(initialData.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), title, dueDate: format(dueDate, "yyyy-MM-dd"), description, completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="dueDate">Due Date</Label>
        <Calendar selected={dueDate} onSelect={setDueDate} />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <Button type="submit">Save Task</Button>
    </form>
  );
};

export default TaskForm;