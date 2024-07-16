import useLogout from "@/hooks/useLogout";
import { BiLogOut }  from 'react-icons/bi';
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

const Logout = () => {
  const {loading,logout} = useLogout();
  
  const handleLogout = async() =>{
      await logout();
  }

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild className="w-[40px] h-[40px] bg-transperant rounded-full hover:bg-gray-900 
        border-none text-white p-0 flex justify-center items-center transition ease-in-out duration-500">
          <Button variant="outline"><BiLogOut className="text-[20px]" /></Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="bg-black w-[80%] rounded-xl">
          <AlertDialogHeader >
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This Action will lead to logout, but later you can login with your credentials i.e username and password
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-transparent hover:border-green-400 hover:text-green-600
            transition ease-in-out duration-500">
              Cancel</AlertDialogCancel>
            <AlertDialogAction className={`bg-red-700 text-white hover:bg-red-800
            transition ease-in-out duration-500 `}  onClick={handleLogout}>
              {loading ? <span className='loading loading-spinner loading-md  bg-white'></span> : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  );
};

export default Logout;

// <button className='flex justify-start items-center h-[6%] w-[100%] pl-3 border-t-[1px] border-t-gray-700 ' onClick={handleLogout}>
//   {!loading ? (<BiLogOut className='text-lg hover:text-gray-300 cursor-pointer' />) : (<span className='loading loading-spinner'></span>)}
// </button>

