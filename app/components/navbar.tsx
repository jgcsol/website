"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from "next/image";

const links = [
  {
    name: 'Pricing', href: '/pricing',
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const logoWidth = 150;
  const logoHeight = 100;
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={logoWidth}
            height={logoHeight}
          />
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
          <>
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={clsx(
                    link.name !== 'Contact' ? 'nav__link' : 'nav__cta',
                    { 'nav__link--active': isActive }
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </>
        </div>
      </div>
    </nav>
  );
}
