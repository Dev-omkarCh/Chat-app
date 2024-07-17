import { GiHamburgerMenu } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom";
import useTheme from "@/zustand/useTheme";


export default function NavigationNavbar() {

  const { darkMode } = useTheme();

  return (
    <>
    <div className={`navbar ${darkMode ? "bg-gray-900" : "bg-gray-200" } w-full absolute top-0 left-0`}>
  <div className="flex-none">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className={`border-none hover:bg-transparent
        ${darkMode ? "hover:text-green-400" : " hover:text-green-500"} transition 
        ease-in-out duration-500`}><GiHamburgerMenu className="text-[30px]" /></Button>
      </SheetTrigger>
      <SheetContent className={`lg:w-[20%] ${darkMode ? "bg-black" : "bg-gray-200 text-black"}`}>
        <SheetHeader>
          <SheetTitle>Welcome</SheetTitle>
          <SheetDescription>
            View all pages and its Content and hope u like it.
          </SheetDescription>
        </SheetHeader>
        <ul className="menu h-[30%] rounded-box w-full flex justify-center items-center gap-4">
          <li className="w-[90%]">
            <Link to="/">
              <FaHome className="text-lg font-bold text-green-400" />
               Home 
            </Link>
          </li>
          <li className="w-[90%]">
            <Link to="/about">
              <FcAbout className="text-lg font-bold text-orange-500" />
               About 
            </Link>
          </li>
          <li className="w-[90%]">
            <Link to="/about#contact">
              <MdOutlineEmail className="text-lg font-bold text-purple-600" />
               Contact 
            </Link>
          </li>
          
      </ul>
        <SheetFooter>
          <SheetClose asChild>
            
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
  <div className="flex-1 bg-transparent">
    <Link to={"/"} className={`btn border-none hover:bg-transparent font-bold ${darkMode ? " text-white" : "text-gray-800"} 
    bg-transparent text-xl shadow-none`}>Chat App</Link>
  </div>
  <div className="flex-none">

  </div>
</div>
    </>
  )
}
