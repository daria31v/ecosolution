import { useEffect, useState } from "react";
import Button from "./Button";
import Navbar from "./Navbar";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => {
    if (isOpen) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <div>
      {isOpen && (
        <div className="bg-bg_burger_menu absolute w-[320px] h-[701px] z-50 p-6 rounded-3xl top-6 right-5">
          <Button
            type="button"
            title="close"
            icon="/svg/close.svg"
            onClick={handleClick}
            variant="btn_close"
            width={8}
            height={8}
          />
          <div className="h-[1px] bg-white w-full mb-4"></div>
          <Navbar state={isOpen} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
