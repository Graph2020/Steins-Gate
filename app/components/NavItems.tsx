import type { JSX } from "react";

import React from "react";
import { navLinks } from "../constants";
import Link from "next/link";

const NavItems = (): JSX.Element => {
  return (
    <nav>
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
