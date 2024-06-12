"use client";
import { useState } from "react";

import Link from "next/link";

const sidebarItems = [
  {
    icon: "./main_icon.png",
    label: "Dashboard",
    path: "#",
    bg: "bg-[#FEB019]",
    textColor: "",
  },
  { icon: "./hr_user.png", label: "HR", path: "#", bg: "", textColor: "" },
  { icon: "./crm_icon.png", label: "CRM", path: "#", bg: "", textColor: "" },
  {
    icon: "./finance_icon.png",
    label: "Finance",
    path: "#",
    bg: "",
    textColor: "",
  },
  {
    icon: "./analytics_icon.png",
    label: "Analytics",
    path: "#",
    bg: "",
    textColor: "",
  },
  {
    icon: "./asset_control.png",
    label: "Asset Control",
    path: "#",
    bg: "",
    textColor: "",
  },
  {
    icon: "./asset_control.png",
    label: "Support",
    path: "#",
    bg: "",
    textColor: "",
  },
];

const Sidebar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col h-screen p-4 bg-gray-100 border-r transition-width duration-300 ${
          isExpanded ? "w-64" : "w-20"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-center">
            <div className={`text-md  space-y-2 my-4`}>
              <h5>TBID number</h5>
              <h5>1231432423</h5>
            </div>
            <div className={`text-sm bg-blue-500 text-white p-2 rounded `}>
              Secure Your Data
            </div>
          </div>
          <div className="flex justify-between">
            {["./conversation.png", "./settings.png", "./user_card.png"].map(
              (item, index) => (
                <div key={index} className={` transition-opacity duration-300`}>
                  <img src={item} className={isExpanded && "w-8 h-8"} />
                </div>
              )
            )}
          </div>
          <nav className="flex flex-col gap-4">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={handleLinkClick}
                className={`flex items-center gap-2 p-2 rounded-lg ${item.bg} ${item.textColor} hover:bg-blue-500 hover:text-white transition-colors duration-300`}
              >
                <img src={item.icon} className="w-6 h-6" />
                <span
                  className={`transition-opacity duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
