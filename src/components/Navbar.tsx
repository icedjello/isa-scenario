"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Your investments", href: "/investments" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-companyPink sticky top-0 flex min-h-[80px] flex-row items-center justify-start gap-16 px-6">
      {navLinks.map(({ name, href }) => (
        <Link
          key={`nav-link-${name}`}
          href={href}
          className={twMerge(
            pathname === href && "underline",
            "hover:decoration-companyBlue text-xl font-light text-white underline-offset-4 hover:underline",
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
