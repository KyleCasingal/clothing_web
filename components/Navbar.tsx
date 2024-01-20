import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex items-center">
        <Image
          src="\veer-black.svg"
          alt="logo"
          width={74}
          height={74}
        />
        <h1 className="font-logoFont text-xl">V E E R</h1>

        <ul className="hidden h-full gap-12 lg:flex ">
          <li></li>

        </ul>
      </Link>
    </nav>
  );
}

export default Navbar