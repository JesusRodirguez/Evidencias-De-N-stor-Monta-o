import React from "react";

type InPutProps = {
  classNameDiv?: string;
  textoLabel?: string;
  classNameLabel?: string;
  type?: string;
  name?: string;
  id?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoFocus?: boolean;
  classNameInput?: string;
  children?: React.ReactNode;
};

const InPut: React.FC<InPutProps> = ({
  classNameDiv = "",
  textoLabel = "",
  classNameLabel = "",
  type = "text",
  name = "",
  id = "",
  placeHolder = "",
  value = "",
  onChange,
  required = false,
  autoFocus = false,
  classNameInput = "",
  children,
}) => {
  return (
    <div className={classNameDiv}>
      {textoLabel && (
        <label htmlFor={id} className={classNameLabel}>
          {textoLabel}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        className={classNameInput}
      />
      {children}
    </div>
  );
};

export default InPut;
