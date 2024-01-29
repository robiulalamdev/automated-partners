import { iLocation, iMenu, iSearch } from "@/lib/icons/icons";
import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-full h-[60px] max-w-theme mx-auto px-2">
          <h1 className="text-[9.831px] capitalize">Automated Partners</h1>
          <div className="flex justify-end items-center gap-[14px]">
            <IconButton className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none p-0 m-0">
              {iLocation}
            </IconButton>
            <IconButton className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none p-0 m-0">
              {iSearch}
            </IconButton>
            <IconButton
              onClick={() => setOpen(!open)}
              className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none p-0 m-0"
            >
              {iMenu}
            </IconButton>
          </div>
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileHeader;
