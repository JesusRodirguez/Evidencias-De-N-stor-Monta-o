import React from "react";

type InPutProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classNameDiv?: string;
  textoLabel?: string;
  classNameLabel?: string;
  classNameInput?: string;
};

const InPut: React.FC<InPutProps> = ({
  classNameDiv = "",
  textoLabel,
  classNameLabel = "",
  classNameInput = "",
  children,
  ...props   
}) => {
  return (
    <div className={classNameDiv}>
      {textoLabel && (
        <label htmlFor={props.id} className={classNameLabel}>
          {textoLabel}
        </label>
      )}

      <input
        className={classNameInput}
        {...props}   
      />

      {children}
    </div>
  );
};

export default InPut;
