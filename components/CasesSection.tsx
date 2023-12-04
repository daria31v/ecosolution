'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import SliderCasesSmall from "./SliderCasesSmall";
import SliderCases from "./SliderCases";

import Button from "./Button";

const CasesSection = () => {

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="cases" className="max-container padding-container ">
      <h2 className="w-[264px] xl:w-[398px] uppercase font-extra regular-28 mt-9 mb-6 xl:mt-0 xl:mb-0">
        Successful cases of our company
      </h2>

      <div className="w-[1px] bg-secondary h-[65px] xl:justify-center items-center hidden xl:flex 2xl:flex xl:mr-2 "></div>
      <div className="flex justify-between ">
        <div className="flex items-end xl:mr-[126px]">
          <span className="regular-number">01<span className="text-green_25">/05</span></span>
        </div>
        <div className=" flex gap-3">
          <Button
            type="button"
            title=""
            icon="/svg/arrow-left.svg"
            width={36}
            height={36}
            variant="btn_transparent_circle"
          />
          <Button
            type="button"
            title=""
            icon="/svg/arrow-right.svg"
            width={36}
            height={36}
            variant="btn_transparent_circle"
          />
        </div>
      </div>
      <div>
      {windowWidth <= 767 && <SliderCasesSmall />}
      {windowWidth > 767 && <SliderCases />}

      </div>
      
    </section>
  );
};

export default CasesSection;
