import React from "react";
import Link from "next/link";

const NavItem = ({ route, path }) => {
  return (
    <Link href={route?.path}>
      <div
        className={`bg-transparent cursor-pointer flex items-center justify-center text-lg font-semibold mb-10 ${
          route?.path !== path
            ? "text-white"
            : "text-[#D68585] bg-white py-2 rounded"
        } `}
      >
        <span>{route?.name}</span>
      </div>
    </Link>
  );
};

export default NavItem;
