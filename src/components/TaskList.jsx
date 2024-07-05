import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const handleToggleComplete = (task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => handleToggleComplete(task)}
            />
            <div>
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader>
              <CardContent>{task.dueDate}</CardContent>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => deleteTask(task.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;