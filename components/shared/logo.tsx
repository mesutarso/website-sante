"use client";
import Image from "next/image";
import LOGO from "@/public/logo-min-sante.png";
import LOGOWHITE from "@/public/Logo_black_Ministere.png";
import { Link } from "next-view-transitions";

type LogoProps = {
  type?: "dark" | "light";
};

function Logo({ type }: LogoProps) {
  return (
    <div>
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={type === "dark" ? LOGO : LOGOWHITE}
          alt="Logo"
          width={220}
          height={100}
          priority={true}
          className={"dark:bg-blend-multiply"}
        />
      </Link>
    </div>
  );
}

export default Logo;
