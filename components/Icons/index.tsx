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
        className="rounded-full bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-accent-theme-500"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
