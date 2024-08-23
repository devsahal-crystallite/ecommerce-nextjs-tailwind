import React from "react";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger} from "@/components/ui/menubar";
import icon1 from "media/images/header1.webp";
import Image from "next/image";
import {FaChevronDown, FaVirusCovid, FaMagnifyingGlass, FaHeart} from "react-icons/fa6";
import Shipping from "media/images/shipping.png";
import Pickup from "media/images/pickup.png";
import Delivery from "media/images/delivery.png";
import Spark from "media/images/spark.png";
import Link from "next/link";
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
      <div className="py-2 bg-[#0071dc] text-white">
        <div className="container">
          <div className="flex items-center justify-between gap-3 relative">
            <div className="z-10 absolute left-0 contents text-[45px] text-yellow-300 top-0">
              <Image src={Spark} alt="icon" width={40} height={40} className="brightness-150 invert" />
            </div>

            <Menubar className="bg-[#004F97] border-transparent rounded-full w-max justify-center items-center">
              <MenubarMenu>
                {/* <Image src={img1} alt="icon" width={60} height={60} /> */}
                <MenubarTrigger className="flex items-center justify-between gap-x-2 py-1 h-10 w-max">
                  <Image src={icon1} width={30} height={30} alt="icon" />
                  <div className="flex flex-col justify-start items-start gap-0 ">
                    <span className="text-[12px] font-bold">How do you want your items?</span>
                    <span className="text-[10px]">Sacramento, 95829 - Sacramento, Sub</span>
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
              <div className="relative flex items-center justify-between w-full h-10 ">
                <input
                  type="search"
                  name="q"
                  placeholder="Search everything at Walmart online and in store"
                  className="flex-1 !py-2 px-6 border border-transparent rounded-full text-lg w-full placeholder:text-[#000] focus:border-none focus:shadow-none placeholder:text-[14px]"
                />
                <button type="reset" className="absolute right-3 p-2 cursor-pointer text-gray-500 hover:text-gray-700 w-8 h-8 bg-[#0071dc] rounded-full">
                  <FaMagnifyingGlass fill="#fff" />
                </button>
              </div>
            </form>

            <div className="w-full flex items-center justify-center gap-5">
              <Link href="/" className="hover:bg-gray-700 rounded-3xl px-5 py-1">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-[20px]" />
                  <div className="flex flex-col gap-y-0">
                    <span className="p-0 m-0 text-[14px] mb-0">Reorder</span>
                    <span className="p-0 m-0 font-bold text-[14px]">My Items</span>
                  </div>
                </div>
              </Link>
              <Link href="/" className="hover:bg-gray-700 rounded-3xl px-5 py-1">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-[20px]" />
                  <div className="flex flex-col gap-y-0">
                    <span className="p-0 m-0 text-[14px]">Reorder</span>
                    <span className="p-0 m-0 font-bold text-[14px]">My Items</span>
                  </div>
                </div>
              </Link>
              <Link href="/" className="hover:bg-gray-700 rounded-3xl px-5 py-1">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-[20px]" />
                  <div className="flex flex-col gap-y-0">
                    <span className="p-0 m-0 text-[14px]">Reorder</span>
                    <span className="p-0 m-0 font-bold text-[14px]">My Items</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
