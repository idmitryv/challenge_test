import React from "react";
import Link from "next/link";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import InputField from "../../components/inputfield";
import { usePassword } from "../../hooks/usePassword";

export default function CreatePassword() {
  const {
    pasCheck,
    password,
    confirmPassword,
    disabled,
    handleChange,
    handleChange1,
    handleNext,
  } = usePassword();
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeaderText Text="Secure your account" />
      <div className=" px-6 flex flex-row items-center justify-center mt-6">
        <p className="text-start text-gray-500">
          Keep your apps safe from other with access to your computer.
        </p>
      </div>

      <div className="mt-8 w-full px-6 ">
        <p className="text-start text-gray-500 ">Password</p>
        <InputField
          onChange={handleChange}
          type="Password"
          placeholder="***"
          value={password}
        />

        <p className="text-start text-gray-500 ">Confirm Password</p>

        <InputField
          onChange={handleChange1}
          type="Password"
          placeholder="***"
          value={confirmPassword}
        />
        {pasCheck ? (
          <p className=" text-red-500 text-xs ">Password should be Same</p>
        ) : (
          ""
        )}
      </div>

      <div className="mt-1 ">
        {disabled ? (
          <ButtonWithIcon isDisabled={disabled} label="Continue" />
        ) : (
          <Link href="/signup/phrase" passHref>
            <ButtonWithIcon isDisabled={disabled} label="Continue" onClick={handleNext} />
          </Link>
        )}
      </div>
      <div className="mt-2  ">
        <p className="text-center  text-[12px]">claudio@metapool.app</p>
      </div>

      <div className="mt-2 px-5 text-[14px]">
        <p className="text-center">
          By creating a NEAR account, you agree to the NEAR Wallet{" "}
          <Link href="/" passHref>
            <span style={{ color: "blue" }}>Terms of Service</span>
          </Link>{" "}
          and{" "}
          <Link href="/" passHref>
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
