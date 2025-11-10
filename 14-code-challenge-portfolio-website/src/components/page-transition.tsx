"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathName);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    if (pathName !== displayedPath) {
      requestAnimationFrame(() => {
        setIsFading(true);
      });
    }

    const timeOut = setTimeout(() => {
      setDisplayedPath(pathName);
      setIsFading(false);
    }, 200);

    return () => {
      clearTimeout(timeOut);
    };
  }, [pathName, displayedPath]);

  return (
    <main
      className={`transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
      }`}
    >
      {displayedPath === pathName && children}
    </main>
  );
}
