import { MoveLeft } from "lucide-react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  //navigate back to home
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex flex-row justify-center">
      <div className="w-[500px] space-y-4 text-center">
        <h1 className="text-center text-slate-100 font-bold text-3xl">
          Detalhes da tarefa
        </h1>

        <div className="bg-slate-400 p-6 rounded-md">
          <h1 className="font-bold text-lg text-white">{title}</h1>
          <p className="text-white">{description}</p>
        </div>

        <button
          className="p-1 bg-slate-400 rounded-md items-center"
          onClick={() => navigate(-1)}
        >
          <MoveLeft className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default TaskPage;
