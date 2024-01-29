import { iLeftArrow } from "@/lib/icons/icons";
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import img from "../../../assets/images/home/avater.png";

const NavigateHeader = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center h-[70px] w-full">
      <IconButton
        onClick={() => router.back()}
        className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none !p-0 m-0 w-fit"
      >
        {iLeftArrow}
      </IconButton>
      <Image className="size-[40px] rounded-full" src={img} alt="" />
    </div>
  );
};

export default NavigateHeader;
