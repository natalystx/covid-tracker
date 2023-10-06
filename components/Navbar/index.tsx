import React from "react";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-[72px] py-6 px-4 sticky top-0 left-0 w-full z-40 bg-white">
      <div className="flex justify-between items-center 2xl:max-w-[1440px] 2xl:mx-auto xl:px-8">
        <Link href="/" className="text-xl font-bold text-gray-900">
          COVID Tracker
        </Link>
        <div />
      </div>
    </div>
  );
};

export default NavBar;
