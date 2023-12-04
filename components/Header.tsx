"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [header, setHeader] = useState(false);

  const scrolling = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolling);

    return () => {
      window.addEventListener("scroll", scrolling);
    };
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  // console.log(isOpen);

  return (
    <div className={header ? "bg-white fixed w-full duration-500 z-50" : "bg-transparent duration-150"}>
      <header className="flex max-container padding-container justify-center items-center gap-3 relative xl:px-4 p-5">
        <Link href="/">
          <Image
            src="/svg/logo.svg"
            alt="logo"
            width={269}
            height={40}
            priority={true}
          />
        </Link>

        <Button
          type="button"
          title=""
          icon="/svg/menu.svg"
          variant="btn_menu"
          onClick={handleClick}
          width={16}
          height={16}
        />

        <div className="md:flex  hidden md:ml-3">
          <Button
            type="button"
            title="Get in thouch"
            icon="/svg/ellipse.svg"
            variant="btn_green"
            width={14}
            height={14}
           
          />
        </div>
      </header>
     {isOpen && <BurgerMenu/>}
    </div>
  );
};

export default Header;
