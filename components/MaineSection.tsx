import React from "react";
import Button from "./Button";
import Image from "next/image";

const MaineSection = () => {
  return (
    <section id="main" className="max-container padding-container">
      <div className="md:grid md:grid-cols-2 md:mt-[164px] mt-[146px] md:gap-[65px]">
        <div>
          <h1 className=" uppercase font-extra regular-36 mb-6 md:mb-0">
            RENEWABLE ENERGY For any task
          </h1>
        </div>
        <div>
          <p className="regular-16 mb-6 text-justify">
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              type="button"
              title="Learn more"
              icon="/svg/arrow-right.svg"
              variant="btn_transparent"
              width={16}
              height={16}
           
            />
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-green_light w-full my-6 md:my-4"></div>
      <ul className="mb-9 md:mb-10 text-center md:text-start md:flex md:justify-between">
        <li className="regular-16">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </li>
        <li className="regular-16">office@ecosolution.com</li>
        <li className="hidden md:flex regular-16">ecosolution © 2023</li>
      </ul>
      <div className="my-9 w-full max-w-1240px relative aspect-video overflow-hidden z-10">
        <Image
          alt="turbine"
          src="/images/lg-turbine.png"
          fill
          sizes="(max-width: 468px) 100vw, 320px; (max-width: 768px) 100vw, 708px; (max-width: 1280px) 100vw, 1240px"
          priority
        />
      </div>
    </section>
  );
};

export default MaineSection;
