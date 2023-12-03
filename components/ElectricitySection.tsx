import React from "react";

const ElectricitySection = () => {
  return (
    <section className="max-container padding-container">
      <h2 className="regular-28 font-extra text-center uppercase mt-9">
        Electricity we produced for all time
      </h2>
      <div className="w-[1px] bg-secondary h-12 my-6"></div>
      <div className="flex items-center justify-center gap-2">
        <span className="font-extra bold-48 text-secondary">1.134.147.814</span>
        <span className="regular-24">kWh</span>
      </div>
    </section>
  );
};

export default ElectricitySection;
