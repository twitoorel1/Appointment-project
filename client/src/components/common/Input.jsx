import React from "react";

const Input = ({
  register,
  // labelClassName,
  disabled,
  // label = "label",
  // showLabel = false,
  type = "text",
  id = "input",
  inputClassName,
  placeholder = "",
  required = true,
}) => {
  return (
    <div className="my-4">
      {/* {showLabel && (
        <label
          htmlFor={id}
          className={`block mb-2 text-sm min-w-fit font-medium text-gray-900 ${labelClassName}`}
        >
          {label}
        </label>
      )} */}

      <input
        autoComplete="false"
        autoCorrect="false"
        {...register}
        type={type}
        id={id}
        disabled={disabled}
        className={`block w-full p-3 text-gray-900 text-md rounded-md bg-white border border-[rgb(232 232 236)] placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:outline-none focus:ring[#66afe9] dark:bg-gray-700 ${inputClassName}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
