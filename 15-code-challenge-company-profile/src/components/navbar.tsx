import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between py-4 px-20 shadow-md items-center top-0 left-0 bg-[#e22f2e]">
      {/* Logo */}
      <div className="relative h-8 w-12">
        <Link href="/">
          <Image
            src="https://ik.imagekit.io/minumvit/assets/logo@2x.png?tr=w-100,bg-E82C2A"
            alt="Logo"
            fill
          ></Image>
        </Link>
      </div>

      {/* Dekstop Navigation */}
      <div className="hidden sm:flex gap-8">
        <Link href="/" className="transition duration-300 hover:text-blue-500">
          Home
        </Link>
        <Link
          href="/about"
          className="transition duration-300 hover:text-blue-500"
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="transition duration-300 hover:text-blue-500"
        >
          Services
        </Link>
        <Link
          href="/blog-list"
          className="transition duration-300 hover:text-blue-500"
        >
          Blog List
        </Link>
      </div>
    </nav>
  );
}
