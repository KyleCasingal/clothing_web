import { SOCIALS } from "@/constants";

import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer>
      <nav className="flex items-stretch justify-around padding-container ">
        <div className="flex items-center justify-center px-2">
          <Image
            src="\veer-black.svg"
            alt="logo"
            width={74}
            height={74}
            className="dark:invert"
          />
          <h1 className="font-logoFont text-xl text-black dark:text-white">
            V E E R
          </h1>
        </div>
        <div className="flex flex-col align-middle justify-items-center">
          <ul className="hidden h-full gap-12 lg:flex">
            {SOCIALS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-sm text-black dark:text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      <p className="flex align-middle justify-center mt-4 text-sm text-gray-700 dark:text-gray-300">
        © Copyright VEER, 2024
      </p>
    </footer>
  );
};

export default Footer;
