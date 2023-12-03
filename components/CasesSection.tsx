import Image from "next/image";
import SliderCases from "./SliderCases";



const CasesSection = () => {
  return (
    <section className='max-container padding-container'>
      <h2 className="uppercase font-extra regular-28 mt-9 mb-6">Successful cases of our company</h2>
      <div>
        <span className="regular-28">01/05</span>
        <button>
          <Image src="/images/svg/arrow-left.svg" alt="arrow-left" width={36} height={36}/>
        </button>
        <button>
        <Image src="/images/svg/arrow-right.svg" alt="arrow-right" width={36} height={36}/>
        </button>
      </div>
      <SliderCases/>
    </section>
  )
}

export default CasesSection;