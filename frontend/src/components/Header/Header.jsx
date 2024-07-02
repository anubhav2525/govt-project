import React from "react";
import UpperHeader from "../Header/UpperHeader/UpperHeader"
import LowerHeader from "../Header/LowerHeader/LowerHeader"
const Header = () => {
  return <div className="bg-slate-200 dark:bg-slate-900 md:px-12 md:py-2">
    <UpperHeader />
    <LowerHeader />
    <hr className="h-px my-1 dark:bg-white border-0 bg-gray-700" />
  </div>;
};

export default Header;
