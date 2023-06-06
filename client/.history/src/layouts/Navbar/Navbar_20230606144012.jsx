import { AppLogo } from "@/components/common";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between lg:items-center border-b border-[#091e4224] p-4">
      <AppLogo />
    </div>
  );
};

export default Navbar;
