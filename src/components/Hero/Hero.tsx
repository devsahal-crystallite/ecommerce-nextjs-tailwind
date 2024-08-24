import Image from "next/image";
import React from "react";

// Media
import G1img1 from "media/images/hero/1_1.webp";
import G1img2 from "media/images/hero/1_2.webp";
import G1img3 from "media/images/hero/1_3.jpg";
import G3img1 from "media/images/hero/g3_1.webp";
import G3img2 from "media/images/hero/g3_2.webp";
import G3img3 from "media/images/hero/g3_3.jpg";
import G2img1 from "media/images/hero/g2_1.webp";
import G4img1 from "media/images/hero/g4_1.jpg";
import G4img2 from "media/images/hero/g4_2.webp";

import Link from "next/link";

const Grid1 = [
  {
    text: "Low prices? Let’s cook out.",
    linkText: "Shop groceries",
    href: "/",
    img: G1img1,
  },
  {
    text: "The Dress Edit",
    linkText: "Shop now",
    href: "/",
    img: G1img2,
  },
  {
    text: "Grill & More",
    linkText: "Shop now",
    href: "/",
    img: G1img3,
  },
];
const Grid2 = [
  {
    text: "Summer’s here to stay",
    linkText: "Shop now",
    href: "/",
    img: G2img1,
    textClass: "text-white",
  },
];
const Grid3 = [
  {
    text: "Outdoor ambiance",
    linkText: "Shop groceries",
    href: "/",
    img: G3img1,
    textClass: "text-white",
  },
  {
    text: "Here comes the mum's, for less",
    linkText: "Shop now",
    href: "/",
    img: G3img2,
  },
  {
    text: "Lawn Games, big fun ,Little cost",
    linkText: "Shop now",
    href: "/",
    img: G3img3,
  },
];
const Grid4 = [
  {
    text: "Summer’s here to stay",
    linkText: "Shop now",
    href: "/",
    img: G4img1,
    textClass: "text-white",
  },
  {
    text: "Summer’s here to stay",
    linkText: "Shop now",
    href: "/",
    img: G4img2,
    textClass: "text-white",
  },
];
export default function Hero() {
  return (
    <section>
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3">
              <div className="">
                {Grid1.map((e, i) => (
                  <div key={i} className="relative mb-3 w-full">
                    <div className="">
                      <Image src={e.img} className="w-full" alt="Hero Images" />
                    </div>
                    <Link href="#">
                      <span className="bg-gray-900/10 absolute top-0 left-0 p-5 w-full h-full">
                        <h3 className={`${e.textClass} font-semibold text-[25px] w-[80%] mb-5 `}>{e.text}</h3>
                        <Link href="#" className="underline hover:no-underline">
                          {e.linkText}
                        </Link>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-6">
              {Grid2?.map((e, i) => (
                <div key={i} className="relative mb-3 w-full">
                  <div className="">
                    <Image src={e.img} className="w-full h-[290px]" alt="Hero Images" />
                  </div>
                  <Link href="#">
                    <div className="bg-gray-900/10 absolute top-0 left-0 p-5 w-full h-full">
                      <h3 className={`${e.textClass} font-semibold text-[40px] leading-normal w-[50%] mb-5 `}>{e.text}</h3>
                      <Link href="#" className="hover:text-red-700 py-1 w-max bg-[#fff] px-4 rounded-full">
                        {e.linkText}
                      </Link>
                    </div>
                  </Link>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mb-3">
                {Grid4.map((e, i) => (
                  <div key={i} className="relative w-full">
                    <div className="w-full h-full">
                      <Image src={e.img} className="w-full h-full object-cover" alt="Hero Images" />
                    </div>
                    <Link href="#" className="absolute inset-0 p-5 bg-gray-900/50 flex flex-col justify-start">
                      <h3 className={`${e.textClass} font-semibold text-[25px] leading-normal mb-5 w-[75%]`}>{e.text}</h3>
                      <Link href="#" className="hover:text-red-700 py-1 bg-[#fff] px-4 rounded-full w-max">
                        {e.linkText}
                      </Link>
                    </Link>
                  </div>
                ))}
              </div>
              {Grid2?.map((e, i) => (
                <div key={i} className="relative mb-3 w-full">
                  <div className="">
                    <Image src={e.img} className="w-full h-[290px]" alt="Hero Images" />
                  </div>
                  <Link href="#">
                    <div className="bg-gray-900/10 absolute top-0 left-0 p-5 w-full h-full">
                      <h3 className={`${e.textClass} font-semibold text-[40px] leading-normal w-[50%] mb-5 `}>{e.text}</h3>
                      <Link href="#" className="hover:text-red-700 py-1 w-max bg-[#fff] px-4 rounded-full">
                        {e.linkText}
                      </Link>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-span-3">
              {Grid3?.map((e, i) => (
                <div key={i} className="relative mb-3 w-full">
                  <div className="">
                    <Image src={e.img} className="w-full" alt="Hero Images" />
                  </div>
                  <Link href="#">
                    <div className="bg-gray-900/10 absolute top-0 left-0 p-5 w-full h-full">
                      <h3 className={`${e.textClass} font-semibold text-[25px] w-[80%] mb-5 `}>{e.text}</h3>
                      <Link href="#" className="underline hover:no-underline">
                        {e.linkText}
                      </Link>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
