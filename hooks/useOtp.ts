import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getFieldValue,
  removeItemFromArray,
  setArrayWithData,
} from "../components/utils";
import { useRouter } from "next/router";
import { fetchVerificationRequest } from "../store/verification/actions";

export const useOtp = () => {
  const dispatch = useDispatch();
  const [valueOTP, setValueOTP] = useState<string>("");
  const [label, setLabel] = useState<string>("email");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [sublabel, setSubLabel] = useState<string | string[]>(
    "johndoe@gmail.com"
  );
  const [arrOtp, setArrOtp] = React.useState<any>([]);
  const array = [1, 2, 3, 4, 5, 6];
  const router = useRouter();
  const { query } = router;
  React.useEffect(() => {
    if (query.email && query.email.length > 0) {
      setLabel("email address");
      setSubLabel(query.email);
    } else if (query.phone && query.phone.length > 0) {
      setLabel("phone number");
      setSubLabel(query.phone);
    }
  }, [query]);
  React.useEffect(() => {
    if (valueOTP.length >= 6) {
      setDisabled(false);
    }
  }, [valueOTP]);

  const handleOTP = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value;
    switch (name) {
      case name:
        if (value) {
          setArrayWithData(arrOtp, setArrOtp, name, value);
        } else if (!value) {
          removeItemFromArray(arrOtp, setArrOtp, name);
        }
        break;

      default:
        break;
    }

    setValueOTP(valueOTP.concat(e.target.value));
    if (!e.target.value) {
      setDisabled(true);
      return;
    }
    if (valueOTP.length !== 6) {
      setDisabled(true);
      return;
    }
  };

  const handleNext = () => {
    let otp = "";
    arrOtp.forEach((ele: any, index: number) => {
      otp += getFieldValue(arrOtp, `otp-${index}`);
    });
    dispatch(fetchVerificationRequest({code: otp}))
  };

  return { array, label, sublabel, disabled, handleOTP, arrOtp, handleNext };
};
