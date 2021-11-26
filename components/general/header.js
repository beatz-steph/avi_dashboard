import React from "react";

import { Notification, Person } from "../../assets/icon";

const Header = () => {
  return (
    <div className="flex justify-between">
      {/* left */}
      <div>
        <span className="text-4xl font-medium">Hello Harry!</span>
      </div>

      {/* right */}
      <div className="flex">
        {/* country iinfo */}
        <div className="flex">
          {/* country icon missing */}

          {/* Country name */}
          <div className="mr-16 ml-4">
            <span className="font-semibold text-2xl text-[#D68585]">
              Espanol
            </span>
          </div>
          <div className="w-10 h-10 mr-4">
            <Notification />
          </div>
          <div className="w-10 h-10">
            <Person />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
