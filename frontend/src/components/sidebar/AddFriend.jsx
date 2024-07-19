import { Button } from "@/components/ui/button";
import CopyButton from "./CopyButton";
import { Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import useFind from "@/hooks/useFind"
import useConversation from "@/zustand/useConversation"
import useFindFriend from "@/zustand/useFindFriend"
import { useState } from "react"
import { IoPersonAdd } from "react-icons/io5"
import { toast } from "react-hot-toast";

export function AddFriend({ profilePic, username, id }) {

    const [ value, setValue ] = useState("");
    const { selectedConversation } = useConversation();
    const { conversations } = useFindFriend();
    const { loading, addFriend } = useFind();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(value.length < 23) return toast.error("ID Not Found");
        await addFriend(value);
        toast.success("Friend Added");
        setValue("");
    }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-[80%] transition ease-in-out duration-500 bg-accent hover:bg-accentHover 
      border-none text-white">
        <Button variant="outline">Add New Friend</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black w-[90%] rounded-[20px]">
        <DialogHeader className={`w-full flex justify-center items-center my-4`}>
          <DialogTitle> Profile </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center flex-col w-full">
            <div className="profile h-[80px] w-[80px]">
                <img src={ profilePic } />
            </div>
            <div className="username mt-2">
                {username}
            </div>
            <div className="my-4 flex justify-center items-center gap-3" id="link">
                {`Your Id :  ${id}`}
                <CopyButton textToCopy={id} />
            </div>
        </div>

        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              placeholder="Enter Friends ID..."
              value={value}
              onChange={e => setValue(e.target.value)}
              className="col-span-3"
            />
            <Button type="submit" className={`bg-accent transition ease-in-out duration-500 text-white
             hover:bg-accentHover border-none "
               ${loading && " btn-disabled"} btn btn-primary `}>
            {loading ? <span className='loading loading-spinner loading-md  bg-white'></span> : <IoPersonAdd /> }
            </Button>
          </div>
        </form>
        
      </DialogContent>
    </Dialog>
  )
}
