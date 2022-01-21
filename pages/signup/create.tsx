import React from "react";
import Link from "next/link";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import InputField from "../../components/inputfield";
import VectorIcon from "../../svgs/Vector.svg";
import Divder from "../../components/divider";
import { useCreate } from "../../hooks/useCreate";

export default function CreateNEAR() {
  const { email, name, disabled, handleChange, handleNext } = useCreate();
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeaderText Text="Create NEAR account" />
      <div className=" px-6 flex flex-row items-center justify-center mt-6">
        <p className="text-start text-gray-500">
          Enter an Account ID to use with your NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets.
        </p>
      </div>

      <div className="mt-8 w-full px-6 ">
        <p className="text-start text-gray-500 ">Full Name</p>
        <InputField
          onChange={handleChange}
          type="name"
          placeholder="Ex. John Doe"
          value={name}
        />
        <div className="flex flex-row items-start justify-start">
          <p className="text-start text-gray-500 ">Account ID</p>
          <div className="pl-2 ">
            <VectorIcon />
          </div>
        </div>
        <div className="mb-1.5 border flex flex-row h-10 rounded-lg bg-gray-50 appearance-none border-2 border-gray-300 w-full text-gray-700 leading-tight focus:bg-white focus:border-accent-theme">
          <input
            className="rounded-l-lg bg-gray-50 appearance-none border-0 border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-accent-theme"
            type="email"
            placeholder="yourname"
            onChange={handleChange}
            value={email}
          />
          <div className="w-15  h-9 px-2 flex flex-col items-center justify-center border-l-2 border-gray-300">
            .near
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        {disabled ? (
          <ButtonWithIcon isDisabled={disabled} label="Continue" />
        ) : (
          <Link href="/signup/secure" passHref>
            <ButtonWithIcon isDisabled={disabled} label="Continue" onClick={handleNext} />
          </Link>
        )}
      </div>

      <div className="mt-5 px-5">
        <p className="text-center">
          by clicking continue you must agree to near labs{" "}
          <Link href="/" passHref>
            <span style={{ color: "blue" }}>Terms & Conditions</span>
          </Link>{" "}
          and{" "}
          <Link href="/" passHref>
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </Link>
        </p>
      </div>
      <div className="mt-5 w-full px-5">
        <Divder />
      </div>
      <div className="mt-5">
        <p className="text-center">Already have an account?</p>
      </div>
      <div className="mt-5">
        <ButtonWithIcon
          isDisabled={false}
          label="Log in with NEAR "
          isLogin={true}
        />
      </div>
    </div>
  );
}
