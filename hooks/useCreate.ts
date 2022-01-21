import React from "react";
import { useDispatch } from "react-redux";
import { fetchUser_CreateRequest } from "../store/createUser/actions";

export const useCreate = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const handleChange = (e: any) => {
    if (e.target.type === "text") {
      setName(e.target.value);
    } else if (e.target.type === "email") {
      setEmail(e.target.value);
    }
  };

  React.useEffect(() => {
    if (email.length >= 3 && name.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, name]);

  const handleNext = () => {
    dispatch(fetchUser_CreateRequest({ name, accountID: email }));
  };

  return {
    email,
    setEmail,
    name,
    disabled,
    setDisabled,
    handleChange,
    handleNext,
  };
};
