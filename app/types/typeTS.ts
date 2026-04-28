type NavLinks = {
  name: string;
  href: string;
  id: number | string;
};

type CardProps = {
  objectPath: string;
  spanName: string;
  description: string;
  imgPath: string;
  miniTitle: string;
  id: number | string;
};

export type { NavLinks, CardProps };
