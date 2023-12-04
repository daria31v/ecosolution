import Image from "next/image";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <div className="">
      <nav className="grid text-white">
        <Link to="main" className="nav">Main
        <Image src='/svg/arrow.svg' alt="arrow" width={16} height={16}/> </Link>
        <Link to="about" className="nav">About
        <Image src='/svg/arrow.svg' alt="arrow" width={16} height={16}/> </Link>
        <Link to="cases" className="nav">Cases
        <Image src='/svg/arrow.svg' alt="arrow" width={16} height={16}/> </Link>
        <Link to="faq" className="nav">FAQ
        <Image src='/svg/arrow.svg' alt="arrow" width={16} height={16}/> </Link>
        <Link to="contact" className="nav">Contact Us
        <Image src='/svg/arrow.svg' alt="arrow" width={16} height={16}/> </Link>
      </nav>
      <div className="flex gap-6 mt-[395px]">
        <Image
          src="/svg/facebook-white.svg"
          alt="facebook"
          width={24}
          height={24}
        />
        <Image
          src="/svg/instagram-white.svg"
          alt="instagram"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Navbar;
