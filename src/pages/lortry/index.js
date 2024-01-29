import { iLeftArrow } from "@/lib/icons/icons";
import { Button, IconButton } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React from "react";

const LortryPage = () => {
  const router = useRouter();
  return (
    <div className="max-w-theme px-[14px] mx-auto bg-[#F8FAFF] h-full min-h-screen">
      <div className="flex justify-between items-center h-[70px] w-full">
        <IconButton
          onClick={() => router.back()}
          className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none !p-0 m-0 w-[10px]"
        >
          {iLeftArrow}
        </IconButton>
        <h1 className="font-semibold text-[#191919] text-[18px]">Search</h1>
        <span></span>
      </div>

      <div className="max-w-[370px] w-full">
        <div>
          <span className="text-[#000209] font-bold text-sm font-arial leading-[20px] tracking-[-0.28px]">
            New Clinet
          </span>
          <input
            type="text"
            className="w-full h-[48px] border-[1px] border-[#EDEFF1] rounded-[4px] bg-transparent mt-3 px-[15px] placeholder:text-[#919296] text-sm"
            placeholder="Full Name"
          />
        </div>
        <div className="mt-[10px]">
          <span className="text-[#000209] font-bold text-sm font-arial leading-[20px] tracking-[-0.28px]">
            Address
          </span>
          <input
            type="text"
            className="w-full h-[48px] border-[1px] border-[#EDEFF1] rounded-[4px] bg-transparent mt-3 px-[15px] placeholder:text-[#919296] text-sm"
            placeholder="address.."
          />
        </div>
      </div>
      <div className="mt-[18px] flex justify-between items-center gap-[14px]">
        <Button className="min-w-[154px] h-[44px] shadow-none hover:shadow-none normal-case text-current bg-primary text-white font-inter text-xs font-medium rounded-[4px]">
          Find on map
        </Button>
        <Button className="min-w-[154px] h-[44px] shadow-none hover:shadow-none normal-case text-current bg-primary text-white font-inter text-xs font-medium rounded-[4px]">
          Current position (GPS)
        </Button>
      </div>

      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.891503112!2d87.70352446720406!3d23.489442187647825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1706560005809!5m2!1sen!2sbd"
          width="100%"
          height="520"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-[17px] flex justify-between items-center gap-[14px] pb-4">
        <Button className="min-w-[154px] h-[44px] shadow-none hover:shadow-none normal-case text-current bg-transparent text-primary font-inter text-xs font-medium rounded-[4px]">
          Cancle
        </Button>
        <Button className="min-w-[154px] h-[44px] shadow-none hover:shadow-none normal-case text-current bg-primary text-white font-inter text-xs font-medium rounded-[4px]">
          ok
        </Button>
      </div>
    </div>
  );
};

export default LortryPage;
