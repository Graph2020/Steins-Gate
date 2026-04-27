import type { JSX } from "react";
import { BsTerminal } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center p-3 justify-between h-12 bg-neutral text-main">
      <div className="flex items-center gap-2">
        <BsTerminal className="size-6" />
        <span className="font-bold font-main text-2xl">Future GadgetLab</span>
      </div>
      <TiThMenuOutline className="size-6" />
    </nav>
  );
};

export default NavBar;
