import { iDiscout, iMoreDots, iSaving, iTeam } from "@/lib/icons/icons";
import React from "react";

const CompanySection = () => {
  return (
    <div className="mx-auto max-w-theme px-[14px] mt-[15.62px]">
      <div className="px-[10px] pt-[9px] pb-[18px] bg-white border-[1px] border-[#E8E8E8] rounded-[8px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#191919] text-[18px] font-semibold font-inter">
            Company Name
          </h1>
          <div>{iMoreDots}</div>
        </div>
        <h1 className="font-inter text-xs text-[#696969] mt-[8px]">
          12-12-2023
        </h1>

        <div className="grid grid-cols-3 gap-[6px] mt-[21px]">
          <div className="py-[14px] px-[12px] rounded-[4px]  compnayCd">
            {iDiscout}

            <h1 className="text-base font-extrabold text-[#191919] mt-[15px]">
              20%
            </h1>
            <h1 className="text-[#696969] text-[10px] mt-[3px]">
              Recurrent <br />
              Discount Rate
            </h1>
          </div>
          <div className="py-[14px] px-[12px] rounded-[4px]  compnayCd">
            {iTeam}

            <h1 className="text-base font-extrabold text-[#191919] mt-[15px]">
              20+
            </h1>
            <h1 className="text-[#696969] text-[10px] mt-[3px]">Team buying</h1>
          </div>
          <div className="py-[14px] px-[12px] rounded-[4px]  compnayCd">
            {iSaving}

            <h1 className="text-base font-extrabold text-[#191919] mt-[15px]">
              20+
            </h1>
            <h1 className="text-[#696969] text-[10px] mt-[3px]">
              Savings Match
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
