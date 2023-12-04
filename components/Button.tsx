import Image from "next/image";
import React, { Children } from "react";
// import { Link } from "react-scroll";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  onClick?: (()=> void) | undefined;
  width: number,
  height: number,
  href?: string | undefined
}
const Button = ({ type, title, icon, variant, onClick, width, height, href }: ButtonProps) => {
  return (
    // <Link to={href}>
    <button className={`${variant}`} type={type} onClick={onClick}>
      <p>{title}</p>
      {icon && <Image src={icon} alt={title} width={width} height={height} />}
    </button>
//* </Link> */}
  );
};

export default Button;
