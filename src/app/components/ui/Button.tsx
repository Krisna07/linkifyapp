'use client'
import React, { useState } from "react";
import { IconType } from "react-icons";
import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | 'icontype' ;
  icon?: IconType;
  href?: LinkStyle;
  hovericon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon,
  children,
  hovericon,
  ...props
}) => {
  const buttonClassNames = cx(
    " w-fit px-4 py-2 flex items-center gap-2 font-medium rounded-md focus:outline-none",
    {
      "text-white bg-indigo-600 hover:bg-indigo-700": variant === "primary",
      "text-indigo-600 bg-indigo-100 hover:bg-indigo-200 text-sm":
        variant === "secondary",
      "text-gray-600 hover:bg-gray-100": variant === "icontype",
    }
  );
  const [btnIcon, setIcon] = useState(icon)

  return (
    <button className={buttonClassNames} {...props} onMouseOver={() => {
      hovericon ? setIcon(hovericon) : "";
    
    }} onMouseLeave={() => setIcon(icon)} >
    
      {children}
      {btnIcon?btnIcon:""}
    </button>
  );
};

export default Button;
