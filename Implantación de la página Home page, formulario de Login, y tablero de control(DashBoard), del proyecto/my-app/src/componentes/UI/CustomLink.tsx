import React from "react";
import Link from "next/link";

type CustomLinkProps = {
  href?: string;
  classNameA?: string;
  textA?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href = "", classNameA = "", textA = "" }) => {
  return (
    <li>
      <Link href={href} className={classNameA}>
        {textA}
      </Link>
    </li>
  );
};

export default CustomLink;
  