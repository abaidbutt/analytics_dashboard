"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
const TopBarItems = [
  {
    label: "Dashboard",
    path: "/",
    bg: "bg-gray-200",
    textColor: "",
  },
  {
    label: "CRM",
    path: "/crm",
    bg: "",
    textColor: "",
  },
  {
    icon: "./logo.png",
    path: "#",
    bg: "",
    textColor: "",
  },
  {
    label: "HR",
    path: "/hr",
    bg: "",
    textColor: "",
  },
  {
    label: "Settings",
    path: "/support",
    bg: "",
    textColor: "",
  },
];
const bottomBarItems = [
  {
    icon: "./main_icon.png",
    label: "Income",
    path: "/support",
    bg: "bg-gray-200",
    textColor: "",
  },
  {
    icon: "./hr_user.png",
    label: "Expenditure",
    path: "/hr",
    bg: "",
    textColor: "",
  },
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
    label: "Other",
    path: "/asset_control",
    bg: "",
    textColor: "",
  },
];

const BottomBar = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex justify-around items-center p-4">
        {TopBarItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col items-center gap-1 p-2 ${
              pathname === item.path && "bg-[#FFE353]"
            }  font-semibold rounded transition-colors duration-300`}
          >
            {item.label ? (
              <span className="text-md">{item.label}</span>
            ) : (
              <img src={item.icon} className="w-6 h-6" />
            )}
          </Link>
        ))}
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex justify-around items-center bg-gray-100 border-t">
        {bottomBarItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col items-center gap-1 p-1 hover:bg-gray-200  transition-colors duration-300`}
          >
            <img src={item.icon} className="w-6 h-6" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
