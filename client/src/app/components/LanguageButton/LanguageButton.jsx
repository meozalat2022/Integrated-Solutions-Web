import React from "react";
import Flag from "react-world-flags";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
const LanguageButton = ({ lang, code }) => {
  return (
    <div className=" flex justify-end px-4 pt-2 items-center cursor-pointer">
      <div className="flex justify-between gap-1 items-center">
        <div className="w-6">
          <Flag code={code} />
        </div>
        <div>
          <p className="text-white">{lang}</p>
        </div>
        <div>
          <MdKeyboardArrowDown className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default LanguageButton;
