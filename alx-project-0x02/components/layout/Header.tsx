"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">My Website</h1>

      <nav className="space-x-6">
        <Link href="/home" className="hover:text-blue-400">
          Home
        </Link>

        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>

        <Link href="/posts" className="hover:text-blue-400">
          Posts
        </Link>
      </nav>
    </header>
  );
}
