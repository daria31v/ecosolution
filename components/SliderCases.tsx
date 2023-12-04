'use client';
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";
import  one  from './../public/images/beautiful-view-wind-turbines-grass-covered-field-captured-holland.png';
import  two  from './../public/images/beautiful-view-wind-turbines-grass-covered-field-captured-holland (1).png';
import  three  from './../public/images/beautiful-view-wind-turbines-grass-covered-field-captured-holland (2).png';
import  landscape from './../public/images/landscape-with-windmills.png';
import  plant  from './../public/images/nuclear-power-plant-center-spain.png';

type Case = {
  id: number;
  photo: StaticImageData | string;
  name: string;
  product: string;
  date: string;
};

const SliderCases = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [casesList, setCasesList] = useState<Case[]>([]);

  
  useEffect(() => {
    const cases = [
      {
        id: 1,
        photo: one,
        name: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH",
        product: "Wind Power for auto field irrigation",
        date: "July 2023",
      },
      {
        id: 2,
        photo: two,
        name: "Zhytomyr city Private Enterprise “Bosch”",
        product: "Solar Panels for industrial use",
        date: "November 2023",
      },
      {
        id: 3,
        photo: three,
        name: "Rivne city Private Enterprise “Biotech”",
        product: "Thermal modules",
        date: "October 2023",
      },
      {
        id: 4,
        photo: landscape,
        name: "Kherson city Private Enterprise “HealthyFarm”",
        product: "Wind power",
        date: "September 2021",
      },
      {
        id: 5,
        photo: plant,
        name: "Zaporizhia city Private Enterprise “Biotech”",
        product: "Mini nuclear stations",
        date: "May 2021",
      },
    ];

    setCasesList(cases);
  
  }, []);
 

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? casesList.length - 1 : prevSlide - 1));
    
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === casesList.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const startIndex = currentSlide * 2;

  const endIndex = startIndex + 2;
 
  const displayedCases = casesList.slice(startIndex, endIndex);


  return (
    <div id="slider" className="relative group">
      <div className="flex gap-6 justify-center items-center h-full">
      {displayedCases.length > 0 &&
          displayedCases.map((item) => (
          <div key={item.id}
            className="mb-3 px-6 pt-6 pb-8 bg-grey_light md:max-w-[342px] " >
            <Image
              src={item.photo}
              alt="cases"
              width={320}
            />
            <div className="flex justify-center items-center">

            <h4 className="mt-4 regular-18 h-[100px]">
              {item.name}
            </h4>
            <Button
              type="button"
              title=""
              icon="/svg/arrow.svg"
              width={28}
              height={28}
              variant="btn_green_circle"
              />
              </div>
             <div className="h-[1px] bg-secondary w-full mt-[21px]"></div>
            <div className="flex justify-between items-center regular-12 mt-4">
              <p >{item.product}</p>
              <p >{item.date}</p>
            </div>
          </div>
          ))}
      </div>
    
      {currentSlide !== 0 && (
        <button className="cursor-pointer]">
         <Image src="/svg/arrow.svg" alt="arrow" width={28} height={28} onClick={prevSlide} className=" relative top-[-50px] right-[-10px]"/>
        </button>
      )}
      {currentSlide !== casesList.length - 2 && (
        <button className=" cursor-pointer">
          <Image src="/svg/arrow.svg" alt="arrow" width={28} height={28} onClick={nextSlide} className=" relative top-[-50px] right-[-250px]"/>
        </button>
      )}
    </div>
  );
};

export default SliderCases;
