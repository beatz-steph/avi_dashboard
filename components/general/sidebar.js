import React from "react";
import { useRouter } from "next/router";
import { NavItem } from ".";
import { NAV_DATA } from "../../constants";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="bg-[#D68585] w-1/6 h-[100vh] px-10 py-20">
      {/* logo */}
      <div className="w-full h-20 bg-gray-300"></div>
      {/* nav options */}
      <div className="flex flex-col mt-20">
        {NAV_DATA.map((route, index) => (
          <NavItem key={`navitem-${index}`} route={route} path={router.route} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
