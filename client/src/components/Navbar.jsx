import { useState } from "react";
import { Menu, X, ChevronDown, BookMarked } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
      <a href="#" className="flex items-center gap-1">
        <BookMarked className="size-6"/><span className="text-xl font-medium">CRF Pvt Ltd.</span>
      </a>

      
      <div
        className={`${
          open ? "max-md:w-full" : "max-md:w-0"
        } max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium`}
      >
        <a href="#about us" className="hover:text-gray-600">About Us</a>

        {/* Dropdown */}
        <div className="relative group flex items-center gap-1 cursor-pointer">
            <span>Services</span>
            <ChevronDown size={18} />

            <div className="absolute bg-white font-normal flex flex-col gap-2 w-max rounded-lg p-4 
              left-0 top-full mt-2 
              opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible 
              transition-all duration-500 shadow-lg">
                
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Pre Property Registration</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Registration</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Post Registration</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Approval Services</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Organisation Registration</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Facilitation of Loan</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">NRI Exclusive</a>
            </div>
            </div>
            
        <a href="#" className="hover:text-gray-600">Acts & Rules</a>
    
        <a href="#" className="hover:text-gray-600">News</a>

        <a href="#" className="hover:text-gray-600">Contact Us</a>

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <X size={24} />
        </button>
      </div>

        <div className="flex gap-2">
            <button className="hidden md:block bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition">
                Register
            </button>
            <button className="hidden md:block hover:text-white hover:bg-black hover:border-white text-black border border-black px-6 py-3 rounded-full font-medium transition">
                Login
            </button>
        </div>

      

      {/* Mobile Open Menu */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
      >
        <Menu size={24} />
      </button>
    </nav>
  );
}
