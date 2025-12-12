import React from "react";

type TitleProps = {
  classNameDiv?: string;
  classNameH1?: string;
  textoH1?: string;
};

const Title: React.FC<TitleProps> = ({
  classNameDiv = "",
  classNameH1 = "",
  textoH1 = "",
}) => {
  return (
    <div className={classNameDiv}>
      <h1 className={classNameH1}>{textoH1}</h1>
    </div>
  );
};

export default Title;
