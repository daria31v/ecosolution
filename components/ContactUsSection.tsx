import Image from "next/image";


const ContactUsSection = () => {
  return (
    <section className='max-container padding-container'>
      <h2 className="regular-28 font-extra text-center mt-9 uppercase">Contact us</h2>
      <div>
        <p>Phone:</p>
        <span>
          <Image src='/images/svg/call.svg' alt='call' width={24} height={24} />
          38 (098) 12 34 567
        </span>
        <span>
          <Image src='/images/svg/call.svg' alt='call' width={24} height={24}/>
          38 (098) 12 34 567
        </span>
      </div>
      <div>
        <p>E-mail:</p>
        <span>
          <Image src='/images/svg/sms.svg' alt='e-mail' width={24} height={24} />
          office@ecosolution.com
        </span>
      </div>
      <div>
        <p>Address:</p>
        <span>
          <Image src='/images/svg/map.svg' alt='address' width={24} height={24} />
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </span>
      </div>
      <div>
        <p>Social Networks:</p>
        <span className="flex gap-6">
        <Image src='/images/svg/facebook.svg' alt='facebook' width={24} height={24} />
        <Image src='/images/svg/instagram.svg' alt='instagram' width={24} height={24} />
        </span>
      </div>
      <form className="bg-grey_light">

      </form>
    </section>
  )
}

export default ContactUsSection;