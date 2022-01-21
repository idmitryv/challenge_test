import React from "react";
import Link from "next/link";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import InputField from "../../components/inputfield";

export default function CreateNEAR() {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [password, setPassword] = React.useState<string>("");
  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeaderText Text="HomePage" />
      <div className="mt-2  ">
        <p className="text-center  text-[18px]">Welcome Back!</p>
      </div>
      <div className=" px-20 flex flex-row items-center justify-center mt-6">
        <p className="text-start text-gray-500">Please enter the password to</p>
      </div>
      <div className=" px-20 flex flex-row items-center justify-center ">
        <p className="text-start text-gray-500">unlock this wallet</p>
      </div>
      <div className="mt-8 w-full px-6 ">
        <p className="text-start text-gray-500 ">Password</p>
        <InputField
          onChange={handleChange}
          type="Password"
          placeholder="***"
          value={password}
        />
      </div>
      <div className="mt-1 ">
        {disabled ? (
          <ButtonWithIcon isDisabled={disabled} label="Unlock" />
        ) : (
          <Link href="/signup/phrase" passHref>
            <ButtonWithIcon isDisabled={disabled} label="Unlocl" />
          </Link>
        )}
      </div>
    </div>
  );
}
