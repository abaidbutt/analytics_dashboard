"use client";
import { useState } from "react";

import Link from "next/link";
import BottomBar from "./Bottombar";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    icon: "./main_icon.png",
    label: "Dashboard",
    path: "/",
    bg: "bg-gray-200",
    textColor: "",
  },
  { icon: "./hr_user.png", label: "HR", path: "/hr", bg: "", textColor: "" },
  { icon: "./crm_icon.png", label: "CRM", path: "/crm", bg: "", textColor: "" },
  {
    icon: "./finance_icon.png",
    label: "Finance",
    path: "/finance",
    bg: "",
    textColor: "",
  },
  {
    icon: "./analytics_icon.png",
    label: "Analytics",
    path: "/analytics",
    bg: "",
    textColor: "",
  },
  {
    icon: "./asset_control.png",
    label: "Asset Control",
    path: "/asset_control",
    bg: "",
    textColor: "",
  },
  {
    icon: "./support.svg",
    label: "Support",
    path: "/support",
    bg: "",
    textColor: "",
  },
];

const Sidebar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

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
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <img src="./logo.png" className="w-12 h-12" />
            <div className={`text-md  space-y-2 my-4`}>
              <h5 className="text-semibold flex items-center gap-1 justify-between">
                TBID
                {isExpanded ? (
                  " number"
                ) : (
                  <img src="./info.png" className="w-4 h-4" />
                )}
              </h5>
              <h5
                className={`text-semibold flex items-center gap-1 justify-between ${
                  isExpanded && "font-semibold"
                }`}
              >
                {isExpanded ? "1231432423" : "UID"}{" "}
                {isExpanded ? "" : <img src="./info.png" className="w-4 h-4" />}
              </h5>
            </div>
            {isExpanded && (
              <div className={`text-sm bg-blue-500 text-white p-2 rounded `}>
                Secure Your Data
              </div>
            )}
          </div>
          <div className="flex justify-around w-full">
            {isExpanded ? (
              ["./conversation.png", "./settings.png", "./user_card.png"].map(
                (item, index) => (
                  <div
                    key={index}
                    className={` transition-opacity duration-300`}
                  >
                    <img src={item} className={isExpanded && "w-8 h-8"} />
                  </div>
                )
              )
            ) : (
              <img src={"./frame_icon.png"} className="w-12 h-3/4" />
            )}
          </div>
          <nav className="flex flex-col gap-4">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={handleLinkClick}
                className={`flex items-center gap-2 p-2 rounded-lg  ${
                  pathname === item.path ? "font-bold" : "font-semibold"
                } hover:bg-[#FFE353]  transition-colors duration-300 ${
                  pathname === item.path && "bg-[#FFE353]"
                }`}
              >
                <img src={item.icon} className="w-6 h-6" />
                {isExpanded && (
                  <span
                    className={`transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end w-full">
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? (
                <img src={"./chevron-right.svg"} className="w-12 h-1/2" />
              ) : (
                <img src="./chevron-left.svg" className="w-12 h-1/2" />
              )}
            </button>
          </div>
        </div>
      </div>
      <>{children}</>
    </div>
  );
};

export default Sidebar;
