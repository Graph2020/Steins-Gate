import Link from "next/link";
import type { JSX } from "react";
import { CardProps } from "../types/typeTS";

const Card = ({
  objectPath,
  spanName,
  description,
  imgPath,
  miniTitle,
}: CardProps): JSX.Element => {
  return (
    <div
      style={{ backgroundImage: `url('${imgPath}')` }}
      className="font-body container flex min-h-80 flex-col items-start bg-black/60 bg-cover bg-center object-cover object-center p-2 bg-blend-overlay"
    >
      <span className="text-secondary bg-slate-700 font-medium uppercase">
        {spanName}
      </span>
      <h3>{miniTitle}</h3>
      <p className="paragraph">{description}</p>
      <Link href={`/${objectPath}`}>View {miniTitle}</Link>
    </div>
  );
};

export default Card;
