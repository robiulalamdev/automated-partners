import { iInputChat, iLeftArrow, iSearchChat } from "@/lib/icons/icons";
import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import img from "../../assets/images/home/avater.png";
import Image from "next/image";
import { useRouter } from "next/router";

const tabs = ["All", "Grocery", "Car", "House", "Furnitures"];

const ChatPage = () => {
  const router = useRouter();
  const [selectTab, setSelectTab] = useState("All");
  return (
    <div className="max-w-theme px-[14px] mx-auto bg-[#F8FAFF] h-full min-h-screen">
      <div className="flex justify-between items-center gap-3 h-[70px] w-full">
        <IconButton
          onClick={() => router.back()}
          className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none !p-0 m-0 w-[10px]"
        >
          {iLeftArrow}
        </IconButton>
        <div className="flex items-center gap-1 w-full flex-grow h-[38px] bg-white rounded-[4px] px-[14px]">
          {iSearchChat}
          <input
            type="text"
            className="w-full h-full border-none outline-none bg-white placeholder:text-[#919296] text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="w-full min-h-[117px] mt-[14px] bg-white rounded-[10px]">
        <div className="w-full h-full overflow-x-auto overflow-hidden px-1 pt-[21px] flex items-center gap-[10px] cursor-pointer">
          <div className="pl-2">{iInputChat}</div>
          <Image className="size-[48px] rounded-full" src={img} alt="" />
          <Image className="size-[48px] rounded-full" src={img} alt="" />
          <Image className="size-[48px] rounded-full" src={img} alt="" />
          <Image className="size-[48px] rounded-full" src={img} alt="" />
        </div>
        <div className="flex items-center gap-[17px] mt-[22px] pl-[26px] cursor-pointer">
          {tabs.map((tab, i) => (
            <h1
              onClick={() => setSelectTab(tab)}
              className={`font-arial text-sm leading-[20px] tracking-[-0.28px] font-medium ${
                tab === selectTab ? "text-primary" : "text-[#919296]"
              }`}
              key={i}
            >
              {tab}
            </h1>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[20px] mt-[22px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <div className="flex items-center gap-[21px]">
                <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                  House
                </h1>
                <span className="text-[#919296] font-arial text-[8px]">
                  12:16 AM
                </span>
              </div>
              <p className="text-[#919296] text-[14px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Are you happy with his
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
