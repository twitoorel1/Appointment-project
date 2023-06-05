import React from "react";
import NextLink from "next/link";

const Link = ({ children, label, href = "/", className }) => {
  return (
    <NextLink className={`${className} text-[#1f76c2]`} href={href}>
      {label}
      {children}
    </NextLink>
  );
};

export default Link;
