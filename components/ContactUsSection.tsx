import Image from "next/image";
import ContactForm from "./ContactForm";


const ContactUsSection = () => {
  return (
    <section id="contact" className='max-container padding-container'>
      <h2 className="regular-28 font-extra text-center mt-9 uppercase xl:mb-[120px] 2xl:mb-[120px]">Contact us</h2>
      <div className="xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 xl:mb-[120px]">

      <div className="my-6 xl:my-0 2xl:my-0 grid gap-6 xl:gap-8 2xl:gap-8">
      <div>
        <p className="regular-16 mb-2">Phone:</p>
        <div className="flex gap-2">
          <Image src='/svg/call.svg' alt='call' width={24} height={24} />
          <p className="regular-20">38 (098) 12 34 567</p>
        </div>
        <div className="flex gap-2">
          <Image src='/svg/call.svg' alt='call' width={24} height={24} />
          <p className="regular-20">38 (098) 12 34 567</p>
        </div>
      </div>
      <div>
        <p className="regular-16 mb-2">E-mail:</p>
        <div className="flex gap-2">
          <Image src='/svg/sms.svg' alt='e-mail' width={24} height={24} />
          <p className="regular-20">office@ecosolution.com</p>
        </div>  
      </div>
      <div>
        <p className="regular-16 mb-2">Address:</p>
        <div className="flex gap-2">
          <Image src='/svg/map.svg' alt='address' width={24} height={24} />
          <p className="regular-20 ">79005, Ukraine, Lvivstreet.<br/> Shota Rustaveli, 7</p>
        </div>
      </div>
      <div>
        <p className="regular-16 mb-2">Social Networks:</p>
        <span className="flex gap-6">
        <Image src='/svg/facebook.svg' alt='facebook' width={24} height={24} />
        <Image src='/svg/instagram.svg' alt='instagram' width={24} height={24} />
        </span>
      </div>
      </div>
      <ContactForm/>
      </div>
    </section>
  )
}

export default ContactUsSection;