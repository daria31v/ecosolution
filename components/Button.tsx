import Image from "next/image";
import React, { Children } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  onClick?: (()=> void) | undefined;
  width: number,
  height: number
};

const Button = ({ type, title, icon, variant, onClick, width, height }: ButtonProps) => {
  return (
    <button className={`${variant}`} type={type} onClick={onClick}>
      <p>{title}</p>
      {icon && <Image src={icon} alt={title} width={width} height={height} />}
    </button>
  );
};

export default Button;
