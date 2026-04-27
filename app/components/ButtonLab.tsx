import type { JSX } from "react";
import { ImLab } from "react-icons/im";

const ButtonLab = (): JSX.Element => {
  return (
    <button className="main-btn group shadow-[0_0_5px_var(--color-main)]">
      <ImLab className="group-hover:animate-spin" />
      <span>join the lab</span>
    </button>
  );
};

export default ButtonLab;
