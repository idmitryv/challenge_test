import React, { useEffect, useRef } from "react";

type Props = {
  label: string;
  onClick: any;
  isActive: boolean;
};

const RoundedBorderButton = ({
  label,
  onClick,
  isActive,
}: Props): JSX.Element => {
  let className =
    "text-gray-900 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2";
  if (isActive) {
    className =
      "text-gray-900 bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border border-gray-300";
  }
  return (
    <button className={className} onClick={onClick} name={label}>
      <span>{label}</span>
    </button>
  );
};

export default RoundedBorderButton;
