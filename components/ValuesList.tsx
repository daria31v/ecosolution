import Image from "next/image";

const values = [
  {
    id: 1,
    icon: "/svg/openness.svg",
    title: "Openness",
    description: "to the world, people, new ideas and projects",
  },
  {
    id: 2,
    icon: "/svg/responsibility.svg",
    title: "Responsibility",
    description:
      "we are aware that the results of our work have an impact on our lives and the lives of future generations",
  },
  {
    id: 3,
    icon: "/svg/innovation.svg",
    title: "Innovation",
    description:
      "we use the latest technology to implement non-standard solutions",
  },
  {
    id: 4,
    icon: "/svg/quality.svg",
    title: "Quality",
    description:
      "we do not strive to be the first among others, but we want to be the best in our business",
  },
];

const ValuesList = () => {
  return (

    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <li className=" w-[147px] bg-grey_light p-3">
        <div className="flex gap-1 items-center">
          <Image
            src="/svg/openness.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Opennesss</h4>
        </div>
        <div className="h-[1px] bg-secondary w-[124px] mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">to the world, people, new ideas and projects</p>
      </li>

      <li className="w-[147px] bg-grey_light p-3">
        <div className="flex gap-1 items-center">
          <Image
            src="/svg/responsibility.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Responsibility</h4>
        </div>
        <div className="h-[1px] bg-secondary w-[124px] mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
      </li>
      <li className="col-span-2 hidden md:block">
        <Image
        src="/images/wind-farms-fields.png"
        alt="wind farms fields"
        width={342}
        height={197}
      />
      </li>
      <li className="col-span-2 hidden md:block">
      <Image
        src="/images/man-worker-firld-by-solar-panels.png"
        alt="man worker firld by solar panels"
        width={342}
        height={197}
      />
      </li>

      <li className="w-[147px] bg-grey_light p-3">
      <div className="flex gap-2 items-center">
          <Image
            src="/svg/innovation.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Innovation</h4>
        </div>
        <div className="h-[1px] bg-secondary w-[124px] mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">we use the latest technology to implement non-standard solutions</p>
      </li>
      <li className="w-[147px] bg-grey_light p-3">
      <div className="flex gap-2 items-center">
          <Image
            src="/svg/quality.svg"
            alt="icon"
            width={16}
            height={16}
          />
          <h4 className="uppercase regular-16 font-extra">Quality</h4>
        </div>
        <div className="h-[1px] bg-secondary w-[124px] mt-[51px] mb-3"></div>
        <p className="regular-14 text-justify">we do not strive to be the first among others, but we want to be the best in our business</p>
      </li>
    </ul>
  );
};

export default ValuesList;
