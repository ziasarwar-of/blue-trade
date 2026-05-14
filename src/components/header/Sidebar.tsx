"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl px-2 text-white"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f1229] z-50 
        transform transition-transform duration-300 p-5
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-white text-lg font-bold mb-6">Menu</h2>

        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/markets"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Markets
          </Link>

          <Link
            href="/transiction"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Transiction
          </Link>
          <Link
            href="/notification"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Notification
          </Link>
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Profile
          </Link>

          <Link
            href="/help"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Help
          </Link>
        </nav>
      </div>
    </>
  );
}
