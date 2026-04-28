import { CardProps, NavLinks } from "../types/typeTS";

const navLinks: NavLinks[] = [
  {
    name: "Home",
    href: "/",
    id: 1,
  },
  {
    name: "Members",
    href: "/members",
    id: 2,
  },
  {
    name: "IMB",
    href: "/imb",
    id: 3,
  },
];

const cards: CardProps[] = [
  {
    objectPath: "phone-microwave",
    spanName: "active prototype",
    description:
      "A device capable of sending localized temporal data pulses. Side effects include jellification of organic matter. Proceed with extreme caution.",
    imgPath: "/images/microwave.png",
    miniTitle: "Phone Microwave",
    id: 1,
  },
  {
    objectPath: "computer",
    spanName: "old prototype",
    description:
      "An old computer that was used in the early stages of our research. It is now a museum piece, but it still holds sentimental value.",
    imgPath: "/images/computer.png",
    miniTitle: "Computer",
    id: 2,
  },
];

export { navLinks, cards };
