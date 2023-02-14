import React, { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

//esta funcion retorna un elemento que contendra a otros elementos
export function TaskContextProvider(props) {
  // creamos hook tasks
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    //setTasks(tasks.filter(task => task.id !== id))
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // asignamos data al hook tasks
  // segundo parametro es array vacio para que cargue solo una vez
  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
