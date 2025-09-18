"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
import NavLink from "./nav-link";
import ModeToggle from "./mode-toggle";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/mission-vision", label: "Mission & Vision" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/quality-assurance", label: "Quality" },
  { href: "/dealership", label: "Dealership" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/80 dark:border-gray-800/80 bg-white/75 dark:bg-black/30 backdrop-blur shadow-header">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <Building2 size={18}/>
          </span>
          <span className="font-semibold tracking-tight">Nirantara Trading</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => <NavLink key={n.href} href={n.href}>{n.label}</NavLink>)}
          <ModeToggle/>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle/>
          <button className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800" onClick={() => setOpen(true)}>
            <Menu size={18}/>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-neutral-950 border-l border-gray-200 dark:border-gray-800 p-5" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}><X/></button>
            </div>
            <div className="flex flex-col gap-2">
              {NAV.map(n => <NavLink key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</NavLink>)}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
