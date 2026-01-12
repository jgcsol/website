import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0.6rem 0'}}>
        <Link href="/" className="nav__brand">
          <img src="/images/logo.png" alt="logo" className="nav__logo" style={{height:40,marginRight:12}} />
        </Link>

        <div className="nav__links">
          <Link href="/pricing" className="nav__link">Pricing</Link>
          <Link href="/portfolio" className="nav__link">Portfolio</Link>
          <Link href="/contact" className="nav__cta">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
