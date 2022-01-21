import React, { useEffect, useRef } from "react";

type Props = {
  number: string;
  description: string;
};

const ButtonWithNum = ({ number,description}: Props) => {
  
  
  return (
    <div className=" m-1 mt-2 bg-white border rounded-lg pr-3 p-0.5 flex flex-row items-center justify-center">
      <p className="text-center text-white bg-gray-500 w-6 rounded-lg">{number}</p>
    <div className="pl-2 ">
   {description}
    </div>
  </div>
    

  
  );
};

export default ButtonWithNum;
