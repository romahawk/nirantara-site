"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void; }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "px-2.5 py-1.5 rounded-md text-sm transition-colors",
        active ? "bg-gray-900 text-white dark:bg-white dark:text-black"
               : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}
