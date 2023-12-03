import React from "react";
import Button from "./Button";
import Image from "next/image";

const MaineSection = () => {
  return (
    <section className="max-container padding-container">
      <div className="">
        <h1 className="pt-[146px] uppercase font-extra regular-36 mb-6">
          RENEWABLE ENERGY For any task
        </h1>
        <p className="regular-16 mb-6 text-justify">
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          title="Learn more"
          icon="/svg/arrow-right.svg"
          variant="btn_transparent"
        />
      </div>

      <div className="h-[1px] bg-green_light w-full my-6"></div>
      <ul className="mb-9 md:mb-10 regular-16 text-center md:text-start md:flex md:gap-3">
        <li>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</li>
        <li>office@ecosolution.com</li>
        <li className="hidden md:flex">ecosolution © 2023</li>
      </ul>
      <div className="my-9 xl:h-[524px] h-[200px] w-full relative overflow-hidden">
        <Image
          alt="turbine"
          src="/images/lg-turbine.png"
          fill={true}
          sizes="100vw"
          priority
          className="object-cover color-transparent"
        />
      </div>
    </section>
  );
};

export default MaineSection;
