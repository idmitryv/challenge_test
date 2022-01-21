import React from "react";
import { useDispatch } from "react-redux";
import { fetchUserRequest } from "../store/signup/actions";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [isActiveEmail, setIsActiveEmail] = React.useState<boolean>(true);
  const [isActivePhone, setIsActivePhone] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const [placeholer, setPlaceHolder] =
    React.useState<string>("johndoe@gmail.com");
  const handleChange = (e: any) => {
    if (isActiveEmail === true) {
      setEmail(e.target.value);
    } else if (isActivePhone === true) {
      setPhone(e.target.value);
    }
    if (!e.target.value) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  };
  const handleButtonClick = (name: string) => {
    switch (name) {
      case "email":
        setIsActivePhone(false);
        setIsActiveEmail(true);
        setPlaceHolder("johndoe@gmail.com");
        setPhone("");
        setDisabled(true);
        break;
      case "phone":
        setIsActivePhone(true);
        setIsActiveEmail(false);
        setEmail("");
        setPlaceHolder("Ex (337) 378 8383");
        setDisabled(true);
        break;
      default:
        break;
    }
  };
  const handleContinue = () => {
    dispatch(fetchUserRequest({ email, phone }))
  };
  return {
    email,
    setEmail,
    phone,
    setPhone,
    isActiveEmail,
    setIsActiveEmail,
    isActivePhone,
    setIsActivePhone,
    disabled,
    setDisabled,
    placeholer,
    setPlaceHolder,
    handleChange,
    handleButtonClick,
    handleContinue,
  };
};
