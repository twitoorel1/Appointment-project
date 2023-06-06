import React, { FC } from "react";
import Link from "./Link";
import Image from "next/image";

const AppLogo = ({
  title = "",
  fontSize = "text-2xl",
  showTitle = true,
  className,
}) => {
  switch (fontSize) {
    case "xs":
      fontSize = "text-xs";
      break;

    case "sm":
      fontSize = "text-sm";
      break;

    case "md":
      fontSize = "text-md";
      break;

    case "lg":
      fontSize = "text-lg";
      break;

    case "xl":
      fontSize = "text-xl";
      break;

    default:
      fontSize = fontSize;
  }

  return (
    <Link href="/" className="flex items-center mx-3 w-fit py-3">
      <Image src={"/logo/logo_full.png"} width={100} height={150} alt="Logo" />
      {showTitle && (
        <div
          className={`text-[#333333] font-normal mx-3 ${fontSize} ${className}`}
        >
          {title}
        </div>
      )}
    </Link>
  );
};

export default AppLogo;
