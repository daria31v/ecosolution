import React from "react";
import Button from "./Button";
import FAQList from "./FAQList";

const FAQSection = () => {
  return (
    <section className="max-container padding-container">
      <h2 className="regular-28 font-extra uppercase mt-9 mb-6">
        Frequently Asked Questions
      </h2>
      <FAQList />
      <p className="regular-18 text-center mt-9 mb-3">
        Didn&apos;t find the answer to your question?{" "}
      </p>
      <div className="flex justify-center">
        <Button
          type="button"
          title="Contact Us"
          icon="/svg/ellipse.svg"
          variant="btn_green"
          width={20}
          height={20}
        />
      </div>
    </section>
  );
};

export default FAQSection;
