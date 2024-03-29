import { routes } from "@/lib/data/data";
import { iClose } from "@/lib/icons/icons";
import { Button, Drawer, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="!p-0 w-full h-full"
      >
        <div className="bg-primary h-full w-full">
          <div className="flex justify-end">
            <IconButton
              onClick={() => setOpen(false)}
              className="bg-transparent size-[24px] text-white hover:shadow-none shadow-none"
            >
              {iClose}
            </IconButton>
          </div>
          <h1 className="font-inter text-sm uppercase text-white ml-5">
            Side manu
          </h1>
          <div className="grid grid-cols-1 mt-[19px] px-[20px] font-inter">
            {routes.map((route, index) => (
              <Link href={`/${route.url}`} key={index} className="w-full">
                <Button className="rounded-none bg-transparent text-left text-current normal-case text-white flex items-center justify-between p-0 h-[60px] w-full border-t border-[#FFFFFF33] hover:shadow-none shadow-none">
                  <div className="flex items-center gap-[14px]">
                    <div>{route.icon}</div>
                    <div>
                      <h1 className="text-white text-sm">{route.name}</h1>
                      <h1 className="text-[10px] opacity-[0.6px]">
                        {route.items} item
                      </h1>
                    </div>
                  </div>
                  {route.count && (
                    <div className="py-[4px] px-[8px] rounded-[30px] bg-white w-fit h-fit flex justify-center items-center text-center text-primary text-[10px]">
                      {route.count}
                    </div>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
