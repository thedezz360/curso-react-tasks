import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//recibimos una funcion
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //desestructuramos el objetos que recibimos y solo extraemos la funcion createTask
  const {createTask} = useContext(TaskContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);

    //creamos un objeto con titulo y description
    createTask({ title, description });

    //para limpiar el formulario
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" max-w-md mx-auto">

      <form onSubmit={handleSubmit}
      className=" bg-slate-800 p-10 mb-4" >
        <h1 className=" text-2xl text-bold text-white mb-3">Create task</h1>
      <input
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />

      <textarea
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="escribe la descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>

      <button
        className="bg-indigo-500 px-3 py-1"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
