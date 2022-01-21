import React from "react";
import ArrowRight from "../../svgs/arrow-right.svg";

type Props = {
  label: string;
  isDisabled: boolean;
  isLogin?: boolean;
  onClick?: any;
};

const ButtonWithIcon = ({ label, isDisabled, isLogin, onClick }: Props): JSX.Element => {
  let className =
    "bg-accent-theme font-bold py-2 px-4 rounded-lg flex items-center";
  if (isDisabled) {
    className = "bg-silver-sand font-bold py-2 px-4 rounded-lg flex items-center";
  }
  if (isLogin && isLogin === true) {
    className = "bg-accent-black font-bold py-2 px-4 rounded-lg flex items-center";
  }
  
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      <span style={{ color: "white" }} className="mr-3">
        {label}
      </span>
      <ArrowRight />
    </button>
  );
};

export default ButtonWithIcon;
