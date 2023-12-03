import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Footer = () => {
  return (
    <section className='max-container padding-container'>
      <div className="h-[1px] bg-secondary w-full mt-9 mb-6"></div>
      <div className="flex gap-5">
      <Link href="/">
        <Image
          src="/images/svg/logo.svg"
          alt="logo"
          width={269}
          height={40}
          priority={true}
        />
      </Link>
      <Button
          type="button"
          title=""
          icon="/images/svg/arrow-up.svg"
          variant="btn_green_circle"
        />
      </div>
      <div className="flex gap-2 justify-center mt-6">
        <Image src='/images/svg/facebook.svg' alt='facebook' width={24} height={24} />
        <Image src='/images/svg/instagram.svg' alt='instagram' width={24} height={24} />
      </div>
      <ul className="regular-16 text-center">
        <li>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</li>
        <li>office@ecosolution.com</li>
        <li>ecosolution © 2023</li>
      </ul>
    </section>

   
  )
}

export default Footer