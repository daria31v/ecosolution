import Image from "next/image";


const ValuesList = () => {
  return (

    <ul className="grid grid-cols-2 xl:grid-cols-4 gap-6">
      <li className=" bg-grey_light p-3">
        <div className="flex gap-1 items-center">
          <Image
            src="/svg/openness.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Opennesss</h4>
        </div>
        <div className="h-[1px] bg-secondary w-full mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">to the world, people, new ideas and projects</p>
      </li>

      <li className=" bg-grey_light p-3">
        <div className="flex gap-1 items-center">
          <Image
            src="/svg/responsibility.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Responsibility</h4>
        </div>
        <div className="h-[1px] bg-secondary w-full mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
      </li>
       
      <li className="xl:col-span-2 hidden xl:block">
        <div className="my-9 w-full max-w-1240px relative aspect-video overflow-hidden z-10">
        <Image
          alt="twind farms fields"
          src="/images/wind-farms-fields.jpeg"
          fill
          sizes="(max-width: 768px) 100vw, 342px; (max-width: 1280px) 100vw, 596px"
          
        />
      </div>
      </li>
         
     <li className="xl:col-span-2 hidden xl:block">
      <div className="my-9 w-full max-w-1240px relative aspect-video overflow-hidden z-10">
        <Image
          alt="man worker firld by solar panels"
          src="/images/man-worker-firld-by-solar-panels.png"
          fill
          sizes="(max-width: 768px) 100vw, 342px; (max-width: 1280px) 100vw, 596px"
          
        />
      </div>
      </li>
   
      <li className=" bg-grey_light p-3">
      <div className=" w-full flex gap-2 items-center">
          <Image
            src="/svg/innovation.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Innovation</h4>
        </div>
        <div className="h-[1px] bg-secondary w-full mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">we use the latest technology to implement non-standard solutions</p>
      </li>
      <li className=" bg-grey_light p-3">
      <div className="flex gap-2 items-center">
          <Image
            src="/svg/quality.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Quality</h4>
        </div>
        <div className="h-[1px] bg-secondary w-full mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">we do not strive to be the first among others, but we want to be the best in our business</p>
      </li>
    </ul>
  );
};

export default ValuesList;
