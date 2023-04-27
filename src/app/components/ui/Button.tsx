import React from "react";
import { IconType } from "react-icons";
import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "icon";
  icon?: IconType;
  href?: LinkStyle;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon: Icon,
  children,
  ...props
}) => {
  const buttonClassNames = cx(
    "px-4 py-2 font-medium rounded-md focus:outline-none",
    {
      "text-white bg-indigo-600 hover:bg-indigo-700": variant === "primary",
      "text-indigo-600 bg-indigo-100 hover:bg-indigo-200 text-sm":
        variant === "secondary",
      "text-gray-600 hover:bg-gray-100": variant === "icon",
    }
  );

  return (
    <button className={buttonClassNames} {...props}>
      {Icon && <Icon className="inline-block mr-2 text-lg align-middle" />}
      {children}
    </button>
  );
};

export default Button;
