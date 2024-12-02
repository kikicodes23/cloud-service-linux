import { Menu } from "./Menu";
import { Add } from "./Add";
import { Task } from "./Task";
import { useState } from "react";

export function Body() {
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "active") return !task.completed;
  });

  return (
    <article>
      <Menu
        setTasks={setTasks}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />

      <Add setTasks={setTasks} currentFilter={currentFilter} />
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={task.completed}
            id={task.id}
            setTasks={setTasks}
            currentFilter={currentFilter}
          />
        ))}
    </article>
  );
}
