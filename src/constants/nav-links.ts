type NavLink = {
  href: string;
  label: string;
};

export const navLinks = [
  {
    href: "/",
    label: "Início",
  },
  {
    href: "/#home-about-us",
    label: "Sobre nós",
  },
  {
    href: "/#home-products",
    label: "Produtos",
  },
  {
    href: "/#home-menu",
    label: "Cardápio",
  },
  {
    href: "/#home-contact",
    label: "Contato",
  },
] as const satisfies NavLink[];
