import type { JSX } from "react";
import { BsTerminal } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = () => {
  return (
    <nav className="bg-neutral text-main flex h-12 w-full items-center justify-between p-3 shadow-[0_0.5px_4px_var(--color-main)]">
      <div className="flex items-center gap-2">
        <BsTerminal className="size-6" />
        <span className="font-main text-2xl font-bold">Future GadgetLab</span>
      </div>
      <TiThMenuOutline className="size-6" />
    </nav>
  );
};

export default NavBar;
