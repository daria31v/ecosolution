import Image from "next/image";
import React from "react";


type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  variant: string;
  width: number;
  height: number;
  icon?: string;
  onClick?: (() => void);

};

const Button = ({ type, title, icon, variant, width, height, onClick }: ButtonProps) => {
  return (
    <button className={`${variant}`} type={type} onClick={onClick}>
      <p>{title}</p>
      {icon && <Image src={icon} alt={title} width={width} height={height} />}
    </button>
  );
};

export default Button;