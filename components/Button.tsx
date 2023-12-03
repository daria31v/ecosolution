import Image from "next/image";
import React, { Children } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`${variant}`} type={type}>
      <p>{title}</p>
      {icon && <Image src={icon} alt={title} width={14} height={14} />}
    </button>
  );
};

export default Button;
