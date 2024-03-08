import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/Features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

const AddToModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
const dispatch = useAppDispatch();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails ={
      title :task,
      description:description,
    }

    dispatch(addTodo(taskDetails))
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient font-semibold">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add To Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  defaultValue="Task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  defaultValue="description"
                  className="col-span-3"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddToModal;
