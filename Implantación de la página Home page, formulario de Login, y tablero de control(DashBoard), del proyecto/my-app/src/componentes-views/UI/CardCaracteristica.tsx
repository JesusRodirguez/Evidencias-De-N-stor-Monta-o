import React from "react";

type CardCaracteristicaProps = {
    classNameDiv?:string;
    classNameH3?:string;
    tituloH3?:string;
    classNameP:string;
    textP?:string;
    children?: React.ReactNode;
}

const CardCaracteristica:React.FC<CardCaracteristicaProps> = ({
    classNameDiv = "",
    classNameH3= "",
    tituloH3 = "",
    classNameP = "",
    textP = "",
    children,
}) => {
    return(
        <div className={classNameDiv}>
            <h3 className={classNameH3}>{tituloH3}</h3>
            <p className={classNameP}>{textP}</p>
            {children}
        </div>
    )
}

export default CardCaracteristica;
