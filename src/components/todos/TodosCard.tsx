import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo } from "@/redux/Features/todoSlice";

type TTodoCardProps = {
  id:string
  title: string;
  description: string;
};

const TodosCard = ({ title, description,id }:TTodoCardProps) => {

  const dispatch =useAppDispatch()
  return (
    <div className="bg-white p-2 rounded-md flex justify-between items-center w-full border">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
      <p>{description}</p>
      <div className="space-x-2">
        <Button onClick={()=>dispatch(removeTodo(id))} size={"sm"} className="bg-red-600">
          <Trash size={18} />
        </Button>
        <Button size={"sm"} className="bg-blue-500">
          <Edit size={18} />
        </Button>
      </div>
    </div>
  );
};

export default TodosCard;
