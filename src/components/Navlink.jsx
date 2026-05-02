"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const pathname = usePathname();

  // Define links in an array for easy maintenance
  const links = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/animals" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
                transition-all duration-200 ease-in-out
                ${isActive ? "bg-primary text-primary-content font-bold" : "hover:bg-base-200"}
                rounded-lg px-4 py-2
              `}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Navlink;
