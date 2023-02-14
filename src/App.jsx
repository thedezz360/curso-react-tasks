import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        {/* pasamos la funcion createTask como parametro */}
        <TaskForm />

        {/* le pasamos la info a taskList */}
        <TaskList />
      </div>
    </main>
  );
}

export default App;
