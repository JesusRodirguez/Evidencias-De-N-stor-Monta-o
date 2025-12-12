import React from "react";

type ButtonProps = {
  classNameButton?: string;
  textoButton?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  classNameButton = "",
  textoButton = "",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={classNameButton}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {textoButton}
    </button>
  );
};

export default Button;
