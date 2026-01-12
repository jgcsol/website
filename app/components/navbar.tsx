import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          <img 
          src="/images/logo.png" 
          alt="logo" 
          className="h-10 w-auto mr-3"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/pricing">Pricing</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
