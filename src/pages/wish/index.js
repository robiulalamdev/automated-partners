import { wish_list } from "@/lib/data/data";
import { iChecked, iLeftArrow, iUnChecked } from "@/lib/icons/icons";
import { IconButton } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const WishPage = () => {
  const router = useRouter();
  const [selectItems, setSelectItems] = useState([]);

  const handleSelect = (newItem) => {
    const isExist = selectItems.find((item) => item.id === newItem.id);
    if (isExist) {
      const remember = selectItems.filter((item) => item.id !== newItem.id);
      setSelectItems(remember);
    } else {
      setSelectItems([...selectItems, newItem]);
    }
  };
  //   console.log(selectItems);
  return (
    <div className="max-w-theme px-[14px] mx-auto bg-[#F8FAFF] h-full min-h-screen">
      <div className="flex justify-between items-center h-[70px] w-full">
        <IconButton
          onClick={() => router.back()}
          className="bg-transparent size-[24px] text-[#7C7897] hover:text-primary hover:shadow-none shadow-none !p-0 m-0 w-[10px]"
        >
          {iLeftArrow}
        </IconButton>
        <h1 className="font-semibold text-[#191919] text-[18px]">Wise Lists</h1>
        <span></span>
      </div>
      <div className="max-w-[370px] w-full">
        <div>
          <span className="text-[#000209] font-bold text-sm font-arial leading-[20px] tracking-[-0.28px]">
            Add an Item
          </span>
          <input
            type="text"
            className="w-full h-[48px] border-[1px] border-primary mt-3 rounded-[4px] bg-transparent px-[15px] placeholder:text-[#919296] text-sm focus:outline-primary"
            placeholder="Full Name"
          />
        </div>
      </div>

      <div className=" max-w-[370px] w-full mt-[30px]">
        <span className="text-[#000209] font-bold text-sm font-arial leading-[20px] tracking-[-0.28px]">
          Wise lists
        </span>

        <div className="grid grid-cols-1 gap-[10px]">
          {wish_list.map((item, index) => (
            <div
              onClick={() => handleSelect(item)}
              key={index}
              className="flex justify-between items-center px-[12px] h-[48px] w-full border-[1px] border-[#EDEFF1] rounded-[4px] cursor-pointer"
            >
              <div className="flex items-center gap-[13px]">
                <div>
                  {selectItems.find((currentItem) => currentItem.id === item.id)
                    ? iChecked
                    : iUnChecked}
                </div>
                <h1 className="font-arial text-sm text-[#919296] leading-[20px] tracking-[-0.28px]">
                  {item.name}
                </h1>
              </div>
              <span className="text-primary text-sm font-arial leading-[20px] tracking-[-0.28px]">
                {item.item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishPage;
