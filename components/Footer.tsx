import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="max-container padding-container mb-10">
      <div className="h-[1px] bg-secondary w-full mt-9 mb-6"></div>
      <div>
        <div className="flex xl:justify-between gap-5">
          <Link href="/">
            <Image
              src="/svg/logo.svg"
              alt="logo"
              width={269}
              height={40}
              priority={true}
            />
          </Link>
          <div className="xl:flex xl:flex-row-reverse  text-center ">
            <Button
              type="button"
              title=""
              icon="/svg/arrow-up.svg"
              variant="btn_green_circle"
              width={16}
              height={16}
            />

            <div className="xl:flex justify-center my-6 xl:my-0 hidden 2xl:mr-[500px] xl:mr-[250px] gap-2">
              <Image
                src="/svg/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
              <Image
                src="/svg/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center my-6 xl:hidden">
        <Image src="/svg/facebook.svg" alt="facebook" width={24} height={24} />
        <Image
          src="/svg/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
        />
      </div>

      <ul className="regular-16 text-center xl:flex xl:justify-between xl:mt-6">
        <li>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</li>
        <li>office@ecosolution.com</li>
        <li>ecosolution © 2023</li>
      </ul>
    </section>
  );
};

export default Footer;
