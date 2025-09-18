"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
import ModeToggle from "./mode-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/quality-assurance", label: "Quality" },
  { href: "/mission-vision", label: "Mission & Vision" },
  { href: "/dealership", label: "Dealership" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock scroll while the mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("overflow-hidden");
    else html.classList.remove("overflow-hidden");
    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {/* Sticky header with translucent blurred background */}
      <header className="
        sticky top-0 z-40
        border-b border-transparent
        bg-[rgb(var(--bg))/70] backdrop-blur-md
        supports-[backdrop-filter]:bg-[rgb(var(--bg))/60]
      ">

        <div className="container h-14 flex items-center justify-between gap-3">
          {/* Brand with Building2 icon */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Nirantara Trading — Home"
          >
            <span
              className="
                inline-flex h-8 w-8 items-center justify-center
                rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20
              "
            >
              <Building2 size={18} />
            </span>
            <span className="hidden sm:inline">Nirantara Trading</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {links.slice(0, 5).map((l) => (
              <Link key={l.href} href={l.href} className="link font-medium">
                {l.label}
              </Link>
            ))}
            <Link href="/dealership" className="btn-primary whitespace-nowrap">
              Become a partner
            </Link>
            <ModeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button
              aria-label="Open menu"
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Dim/blurred backdrop */}
          <button
            className="
              fixed inset-0 z-50 md:hidden
              bg-[rgb(var(--bg))/65] backdrop-blur-md
              supports-[backdrop-filter]:bg-[rgb(var(--bg))/55]
            "
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          {/* Menu panel */}
          <div
            role="dialog"
            aria-modal="true"
            className="
              fixed inset-x-3 top-3 z-50 md:hidden
              rounded-2xl border border-gray-200 dark:border-gray-800
              bg-[rgb(var(--bg))] shadow-xl
            "
          >
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <span
                  className="
                    inline-flex h-8 w-8 items-center justify-center
                    rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20
                  "
                >
                  <Building2 size={18} />
                </span>
                <span className="font-semibold">Menu</span>
              </div>
              <button
                aria-label="Close menu"
                className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <nav className="px-3 pb-3">
              <ul className="grid">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="
                        block rounded-lg px-3 py-2.5
                        hover:bg-gray-100 dark:hover:bg-white/10
                      "
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="p-3">
                <Link href="/dealership" className="btn-primary w-full text-center block">
                  Become a partner
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
