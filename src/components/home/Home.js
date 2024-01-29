import React from "react";
import Banner from "./Banner";
import CompanySection from "./CompanySection";
import Image from "next/image";
import img from "../../assets/images/home/avater.png";
import SendBox from "./SendBox";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <CompanySection />
      <section className="grid grid-cols-1 gap-y-[14px] px-[14px] pt-[21px] bg-[#F8FAFF]">
        <div className="flex items-start gap-[10px]">
          <Image className="size-[40px] rounded-full" src={img} alt="" />
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#000209] text-sm font-bold font-arial capitalize">
                Imtalesha
              </h1>
              <span className="text-[#919296] text-[8px] font-arial">
                12:16 AM
              </span>
            </div>
            <p className="text-sm text-[#919296] font-arial leading-[20px] tracking-[-0.28px]">
              Are you happy with his work and want to give some tips?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <Image className="size-[40px] rounded-full" src={img} alt="" />
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#000209] text-sm font-bold font-arial capitalize">
                Imtalesha
              </h1>
              <span className="text-[#919296] text-[8px] font-arial">
                12:16 AM
              </span>
            </div>
            <p className="text-sm text-[#919296] font-arial leading-[20px] tracking-[-0.28px]">
              Are you happy with his work and want to give some tips?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <Image className="size-[40px] rounded-full" src={img} alt="" />
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#000209] text-sm font-bold font-arial capitalize">
                Imtalesha
              </h1>
              <span className="text-[#919296] text-[8px] font-arial">
                12:16 AM
              </span>
            </div>
            <p className="text-sm text-[#919296] font-arial leading-[20px] tracking-[-0.28px]">
              Are you happy with his work and want to give some tips?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <Image className="size-[40px] rounded-full" src={img} alt="" />
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#000209] text-sm font-bold font-arial capitalize">
                Imtalesha
              </h1>
              <span className="text-[#919296] text-[8px] font-arial">
                12:16 AM
              </span>
            </div>
            <p className="text-sm text-[#919296] font-arial leading-[20px] tracking-[-0.28px]">
              Are you happy with his work and want to give some tips?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <Image className="size-[40px] rounded-full" src={img} alt="" />
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#000209] text-sm font-bold font-arial capitalize">
                Imtalesha
              </h1>
              <span className="text-[#919296] text-[8px] font-arial">
                12:16 AM
              </span>
            </div>
            <p className="text-sm text-[#919296] font-arial leading-[20px] tracking-[-0.28px]">
              Are you happy with his work and want to give some tips?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <Image className="size-[40px] rounded-full" src={img} alt="" />
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#000209] text-sm font-bold font-arial capitalize">
                Imtalesha
              </h1>
              <span className="text-[#919296] text-[8px] font-arial">
                12:16 AM
              </span>
            </div>
            <p className="text-sm text-[#919296] font-arial leading-[20px] tracking-[-0.28px]">
              Are you happy with his work and want to give some tips?
            </p>
          </div>
        </div>
      </section>

      <SendBox />
    </div>
  );
};

export default HomePage;
