import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CategoryIcon,
  HomeIcon,
  Security,
  Subscription,
  UserIcon,
  GoPremiumIcon,
} from "./icons";
import { Logo } from "@/assets/icons";

interface SidebarLinkProps {
  title: string;
  icon: React.JSX.Element;
  href: string;
}

const dashboardLinks: SidebarLinkProps[] = [
  { title: "Home", icon: <HomeIcon />, href: "/" },
  { title: "Categories", icon: <CategoryIcon />, href: "/categories" },
];

const accountManagementLinks: SidebarLinkProps[] = [
  { title: "User Profile", icon: <UserIcon />, href: "/user-profile" },
  { title: "Security", icon: <Security />, href: "/security" },
  { title: "Subscriptions", icon: <Subscription />, href: "/subscriptions" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      // className="w-[270px] max-w-xs h-screen border-r"
      // className="border-r max-h-screen p-4 pr-8 fixed w-[200px]"
      className=" h-screen p-4 pr-8 relative"
    >
      <div className="fixed w-[150px]">
        <div className="flex flex-col justify-between h-screen pb-8 ">
          <div className="flex flex-col gap-y-6">
            <div>
              <Logo />
            </div>

            <div>
              <p className="text-sm text-gray-400 ">Dashboards</p>
              <ul className=" flex flex-col">
                {dashboardLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      className={`${
                        isActive ? "bg-gray-200 rounded-md" : ""
                      } text-gray-900 text-sm pl-3 flex items-center gap-x-1.5 py-2 my-1`}
                      href={link.href}
                      key={link.title}
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="text-sm text-gray-400 ">Account Management</p>
              <ul className=" flex flex-col">
                {accountManagementLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      className={`${
                        isActive ? "bg-gray-200 rounded-xl" : ""
                      } text-gray-900 text-sm pl-3 flex items-center gap-x-1.5 py-2 my-1`}
                      href={link.href}
                      key={link.title}
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="">
            <GoPremiumIcon />
            <h3 className="text-gray-900 text-lg font-bold mt-1.5">
              Go Premium
            </h3>
            <p className="text-gray-400 text-sm">
              Unlock Additional Space and Boost Upload Limits!
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
