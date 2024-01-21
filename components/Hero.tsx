import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-row items-center justify-center gap 20  py-10 pb-32 md:gap-2 lg:py-20">
        <div>
          <Image
            src="/6CC3231009001R.jpg"
            alt="landing photo"
            className=""
            width={1500}
            height={1000}
          />
        </div>
        <div className="p-5">
          <h6 className="flex font-logoFont text-5xl text-black dark:text-white py-5">
            V E E R
          </h6>
          <p className=" flex font-sans text-base text-black dark:text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            blandit justo id nunc suscipit aliquet. Aenean lacus justo, egestas
            ac massa nec, varius vehicula neque. Vestibulum eu ipsum sed odio
            porttitor elementum. Aliquam in molestie arcu. Sed id imperdiet
            eros. Cras orci enim, cursus vitae consectetur ac, cursus eget
            augue. Donec vulputate mollis consectetur. Donec pharetra felis ac
            nibh consequat pharetra. Nam scelerisque tortor vitae dolor cursus,
            eget ultricies nisl hendrerit. Integer vehicula elit nec hendrerit
            tincidunt.{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
