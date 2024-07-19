import { MdDelete } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import useClearChat from '@/hooks/useClearChat';
import useConversation from "@/zustand/useConversation";

const DeleteMessage = () => {
  const {loading, deleteChat} = useClearChat();
  const { selectedConversation, setMessages } = useConversation();
  
  const handleDelete = async() =>{
     await deleteChat();
     setMessages([]);
  }

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild className="w-[40px] h-[40px] bg-transperant rounded-full hover:bg-gray-900 
        border-none text-red-500 p-0 flex justify-center items-center transition ease-in-out duration-500 absolute top-3 right-5">
          <Button variant="outline"><MdDelete className="text-[20px]" /></Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="bg-black w-[80%] rounded-xl">
          <AlertDialogHeader >
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This Action will lead to Clear all the chats you have with {selectedConversation.username}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-transparent hover:border-green-400 hover:text-green-600
            transition ease-in-out duration-500">
              Cancel</AlertDialogCancel>
            <AlertDialogAction className={`bg-red-700 text-white hover:bg-red-800
            transition ease-in-out duration-500 `}  onClick={handleDelete}>
              {loading ? <span className='loading loading-spinner loading-md  bg-white'></span> : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteMessage
