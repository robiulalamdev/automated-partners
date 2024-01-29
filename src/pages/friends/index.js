import NavigateHeader from "@/components/shared/Header/NavigateHeader";
import Image from "next/image";
import React from "react";
import img from "../../assets/images/home/avater.png";
import { Button } from "@material-tailwind/react";

const FriendsPage = () => {
  return (
    <div className="max-w-theme mx-auto px-[14px]">
      <NavigateHeader />

      <div className="mt-[10px]">
        <h1 className="text-black text-[18px] font-semibold font-inter">
          Your Friends{" "}
        </h1>
        <p className="font-inter text-sm text-[#696969] mt-[2px]">
          240 friends
        </p>
      </div>

      <section className="grid grid-cols-1 gap-[14px] mt-[27px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}

        {/* part 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-white">
            Add
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <Image
              className="size-[40px] rounded-full border-[2px] border-primary"
              src={img}
              alt=""
            />
            <div>
              <h1 className="text-sm text-[#000209] font-arial capitalize font-bold">
                Jomila Khatun
              </h1>
              <p className="text-[#919296] text-[10px] leading-[16px] tracking-[-0.2px] mt-[1px]">
                Business man
              </p>
            </div>
          </div>
          <Button className="bg-white border-[1px] border-primary normal-case text-current w-[60px] h-[34px] rounded-[4px] hover:shadow-none shadow-none font-inter text-sm font-medium flex justify-center items-center p-0 text-primary">
            Send!
          </Button>
        </div>
        {/* end  */}
      </section>
    </div>
  );
};

export default FriendsPage;
