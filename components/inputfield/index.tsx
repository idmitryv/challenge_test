import React from "react";

type Props = {
  onChange: any;
  placeholder: string;
  type: string;
  value: string;
};

const InputField = ({ onChange, type, placeholder, value }: Props): JSX.Element => {
  return (
    <div className="mb-6 rounded-md">
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg bg-gray-50 appearance-none border-2 border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-accent-theme"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
