import { iCam, iMic } from "@/lib/icons/icons";
import { IconButton } from "@material-tailwind/react";
import React from "react";

const SendBox = () => {
  return (
    <div className="inputChat sticky bottom-0 h-[96px] w-full bg-white flex items-center justify-between px-[17px] gap-3">
      <input
        type="text"
        className="max-w-[263px] w-full h-[48px] rounded-[55px] bg-[#F2F3F7] focus:outline-primary"
      />
      <div className="flex justify-end items-center gap-2">
        <IconButton
          size="sm"
          className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none p-0 m-0"
        >
          {iCam}
        </IconButton>
        <IconButton
          size="sm"
          className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none p-0 m-0"
        >
          {iMic}
        </IconButton>
      </div>
    </div>
  );
};

export default SendBox;
