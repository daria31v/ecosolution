import ValuesList from "./ValuesList";




const AboutValuesSection = () => {
  return (
    <section id="about" className="max-container padding-container">
      <h2 className="mt-9 mb-6 uppercase font-extra regular-28">
        Main values of our <br/>company
      </h2>
      <p className="regular-16 mb-9 text-justify">
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world&apos;s
        energy needs.
      </p>
      <ValuesList/>
    </section>
  );
};

export default AboutValuesSection;
