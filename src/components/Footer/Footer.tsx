import Link from "next/link";
import React from "react";

const listItems = [
  "All Departments",
  "Store Directory",
  "Careers",
  "Our Company",
  "Sell on Walmart.com",
  "Help",
  "Product Recalls",
  "Accessibility",
  "Tax Exempt Program",
  "Get the Walmart App",
  "Sign-up for Email",
  "Safety Data Sheet",
  "Terms of Use",
  "Privacy & Security",
  "California Supply Chain Act",
  "Your Privacy Choices",
  "Notice at Collection",
  "NV Consumer Health Data Privacy Notice",
  "WA Consumer Health Data Privacy Notice",
  "Request My Personal Information",
  "Brand Shop Directory",
  "Pharmacy",
  "Walmart Business",
  "#IYWYK",
  "Delete Account",
];

export default function Footer() {
  return (
    <footer>
      <div className="py-5 bg-[#004f9a] text-white">
        <div className="container">
          <div className="flex items-center justify-center gap-3">
            <ul className="flex items-center gap-x-5  flex-wrap justify-center py-3 text-[14px] px-3 max-w-[1400px]">
              {listItems.map((text, i) => (
                <li key={i} className=""><Link href="/">{text}
                </Link></li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="flex items-center justify-center gap-3">copyright</div>
        </div>
      </div>
    </footer>
  );
}
