import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Copyright */}
      <div className="relative bg-[#e22f2e] w-full py-7 px-10 flex items-center">
        <p className="text-white text-sm relative z-10 pl-16">
          Copyright © VIT 2020 All Rights Reserved
        </p>
        {/* Social Media */}
        <div className="absolute right-0 top-0 h-full bg-[#2596be] px-10 flex items-center gap-6 rounded-bl-2xl">
          <Link href="https://web.facebook.com/minumvit?_rdc=1&_rdr#">
            <Image
              src="/facebook-logo.svg"
              alt="Facebook Logo"
              width={24}
              height={24}
              className="transition hover:scale-150 duration-300"
            />
          </Link>
          <Link href="https://x.com/minumvit">
            <Image
              src="/twitter-logo.svg"
              alt="Twitter Logo"
              width={24}
              height={24}
              className="transition hover:scale-150 duration-300"
            />
          </Link>
          <Link href="https://www.youtube.com/user/minumvit">
            <Image
              src="/youtube-logo.svg"
              alt="Youtube Logo"
              width={24}
              height={24}
              className="transition hover:scale-150 duration-300"
            />
          </Link>
          <Link href="https://www.instagram.com/minumvit">
            <Image
              src="/instagram-logo.svg"
              alt="Instagram Logo"
              width={24}
              height={24}
              className="transition hover:scale-150 duration-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
