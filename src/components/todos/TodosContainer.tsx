import { Button } from "../ui/button";
import TodosCard from "./TodosCard";

const TodosContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <Button className="bg-primary-gradient font-semibold">Add Todo</Button>
        <Button>Filter</Button>
      </div>

      <div className="bg-primary-gradient p-[5px] rounded-xl w-full h-auto ">
        <div className="bg-white p-4 w-full h-full rounded-lg space-y-2">
          <TodosCard />
          <TodosCard />
        </div>
      </div>
    </div>
  );
};

export default TodosContainer;
