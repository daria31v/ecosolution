import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="flex max-container padding-container items-center gap-3 bg-bg_burger_menu relative z-30l:px-20 3xl:px-0 py-5">
      <Link href="/">
        <Image
          src="/images/svg/logo.svg"
          alt="logo"
          width={269}
          height={40}
          priority={true}
        />
      </Link>
      {/* <ul className="hidden h-full gap-12 lg:flex"></ul> */}
      <div className="px-3 py-3 bg-green_light rounded-full ml-auto">
      <Image src="/images/svg/menu.svg" alt="menu" width={16} height={16} className="cursor-pointer"/>
      </div>
      <div className="md:flex hidden md:ml-3">
        <Button
          type="button"
          title="Get in thouch"
          icon="/images/svg/ellipse.svg"
          variant="btn_green"
        />
      </div>
    </nav>
);
};



export default Header;
