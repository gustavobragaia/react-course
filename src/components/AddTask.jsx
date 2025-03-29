import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="digite o titulo da tarefa "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        placeholder="digite a decrição da tarefa "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Preencha o título e a descrição da tarefa seu inergumino"
            );
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
