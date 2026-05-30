// src/data/navItems.ts
export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Our Works", href: "/our-works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];