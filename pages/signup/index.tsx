import React from "react";
import Link from "next/link";
import HomeHeader from "../../components/headers/HomeHeader";
import RoundedButton from "../../components/buttons/RoundedBorderButton";
import InputField from "../../components/inputfield";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import Divder from "../../components/divider";
import { useSignUp } from "../../hooks/useSignUp";

function SignUp() {
  const {
    email,
    phone,
    isActiveEmail,
    isActivePhone,
    disabled,
    placeholer,
    handleChange,
    handleButtonClick,
    handleContinue,
  } = useSignUp();

  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeader />
      <div className="flex flex-col items-center justify-center p-5">
        <div className="flex flex-row items-center justify-center mt-5">
          <RoundedButton
            label="Email"
            onClick={() => handleButtonClick("email")}
            isActive={isActiveEmail}
          />
          <RoundedButton
            label="Phone"
            onClick={() => handleButtonClick("phone")}
            isActive={isActivePhone}
          />
        </div>
        <div className="mt-5 w-full px-3">
          <InputField
            onChange={handleChange}
            type={isActiveEmail === true ? "email" : "tel"}
            placeholder={placeholer}
            value={isActiveEmail === true ? email : phone}
          />
        </div>
        <div className="mt-0">
          {disabled ? (
            <ButtonWithIcon isDisabled={disabled} label="Continue" />
          ) : (
            <Link
              href={`/signup/verification?email=${email}&phone=${phone}`}
              passHref
            >
              <ButtonWithIcon isDisabled={disabled} label="Continue" onClick={handleContinue} />
            </Link>
          )}
        </div>
        <div className="mt-5">
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
        <div className="mt-10 w-full px-3">
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
    </div>
  );
}

export default SignUp;
