import React from "react";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger} from "@/components/ui/menubar";
import icon1 from "media/images/header1.webp";
import Image from "next/image";
import {FaChevronDown, FaVirusCovid, FaMagnifyingGlass} from "react-icons/fa6";
import Shipping from "media/images/shipping.png";
import Pickup from "media/images/pickup.png";
import Delivery from "media/images/delivery.png";
import Spark from "media/images/spark.png";
const MenuItem = [
  {
    text: "Shipping",
    img: Shipping,
  },
  {
    text: "Pickup",
    img: Pickup,
  },
  {
    text: "Delivery",
    img: Delivery,
  },
];

export default function Header() {
  return (
    <header>
      <div className="py-5 bg-[#0071dc] text-white">
        <div className="container">
          <div className="flex items-center justify-center gap-3 relative">
            <div className="z-10 absolute left-0 contents text-[45px] text-yellow-300 top-0">
              <Image src={Spark} alt="icon" width={50} height={50} className="brightness-150 invert" />
            </div>

            <Menubar className="bg-[#004F97] border-transparent rounded-full w-full justify-center items-center">
              <MenubarMenu>
                {/* <Image src={img1} alt="icon" width={60} height={60} /> */}
                <MenubarTrigger className="flex items-center justify-center gap-x-2 py-1">
                  <Image src={icon1} width={35} height={35} alt="icon" />
                  <div className="flex flex-col justify-start items-start gap-1">
                    <span className="text-[14px] font-bold">How do you want your items?</span>
                    <span className="text-[11px]">Sacramento, 95829 - Sacramento, Sub</span>
                  </div>
                  <FaChevronDown />
                </MenubarTrigger>
                <MenubarContent className="w-full bg-[#0071dc] text-white px-5 py-5 border-none  mt-2">
                  <div className="flex items-center justify-center gap-3">
                    {MenuItem.map((e, i) => (
                      <MenubarItem key={i} className="flex flex-col items-center justify-center gap-3 pt-5">
                        <Image src={e.img} width={50} height={50} alt="menu icon" />
                        <span className="font-semibold">{e.text}</span>
                      </MenubarItem>
                    ))}
                  </div>
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <form action="/search" className="flex items-center justify-center px-4 w-full">
              <div className="relative flex items-center justify-between w-full ">
                <input
                  type="search"
                  name="q"
                  placeholder="Search everything at Walmart online and in store"
                  className="flex-1 py-4 pl-6 pr-12 border border-transparent rounded-full text-lg w-full placeholder:text-[#000]"
                />
                <button type="reset" className="absolute right-5 p-3 cursor-pointer text-gray-500 hover:text-gray-700 w-10 h-10 bg-[#0071dc] rounded-full">
                  <FaMagnifyingGlass fill="#fff" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
