"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <img src="/images/logo.png" alt="logo" className="nav__logo" />
        </Link>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-box">
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </span>
        </button>

        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          <Link href="/pricing" className="nav__link" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/portfolio" className="nav__link" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="/contact" className="nav__cta" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
