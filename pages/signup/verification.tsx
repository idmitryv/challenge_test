import React from "react";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import Link from "next/link";
import { useOtp } from "../../hooks/useOtp";

export default function Verifcation() {
  const { array, label, sublabel, disabled, handleOTP, handleNext } = useOtp();
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeaderText Text="Verification" />
      <div className="pt-5 px-10 flex flex-row items-center justify-center mt-5">
        <p className="text-center">
          We&apos;ve sent a 6-digit verification code to the {label}
        </p>
      </div>
      <div className="mt-2 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">{sublabel}</p>
      </div>

      <div className="mt-8 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-gray-500">Enter Verification Code</p>
      </div>
      <div className="mt-0">
        <div id="otp" className="flex flex-row justify-center px-2 ">
          {array.map((arr, ind) => (
            <input
              onChange={(e) => handleOTP(e, `otp-${ind}`)}
              className="m-2 border focus:border-accent-theme focus:outline-none h-10 w-10 text-center rounded appearance-none"
              type="text"
              id="first"
              maxLength={1}
              key={ind}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        {disabled ? (
          <ButtonWithIcon label="Continue" isDisabled={true} />
        ) : (
          <Link href="/signup/create" passHref>
            <ButtonWithIcon label="Continue" isDisabled={disabled} onClick={handleNext} />
          </Link>
        )}
      </div>
      <div className="my-5">
        <p className="text-center">Didn&apos;t receive your code?</p>
      </div>

      <div className="mt-2  mb-7 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">Send to a different {label}</p>
      </div>
      <div className=" px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">Resend your code</p>
      </div>
    </div>
  );
}
