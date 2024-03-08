import { useAppSelector } from "@/redux/hooks";
import AddToModal from "./AddToModal";
import TodoFilter from "./TodoFilter";
import TodosCard from "./TodosCard";

const TodosContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-around mb-4">
        <AddToModal />

        <TodoFilter />
      </div>

      <div className="bg-primary-gradient p-[5px] rounded-xl w-full h-auto ">
        <div className="bg-white p-4 w-full h-full rounded-lg space-y-2">
       {
        todos.map((items)=>(
          <TodosCard {...items}
          />
        ))
       }

        </div>
      </div>
    </div>
  );
};

export default TodosContainer;
