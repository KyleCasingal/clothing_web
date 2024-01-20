import { NAV_LINKS } from "@/constants";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-stretch justify-between padding-container relative z-30 py-1">
      <Link href="/" className="flex items-center justify-center px-2">
        <Image src="\veer-black.svg" alt="logo" width={74} height={74} />
        <h1 className="font-logoFont text-xl">V E E R</h1>
      </Link>
      <div className="px -2">
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="px-5">
        <ul className="hidden h-full gap-8 lg:flex flexCenter">
          <li>
            <Image
              className="cursor-pointer"
              src="\mag-glass-solid.svg"
              alt="mag-glass"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              className="cursor-pointer"
              src="\heart-regular.svg"
              alt="mag-glass"
              width={20}
              height={20}
            />
          </li>

          <li>
            <Image
              className="cursor-pointer"
              src="\user-regular.svg"
              alt="mag-glass"
              width={20}
              height={20}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
