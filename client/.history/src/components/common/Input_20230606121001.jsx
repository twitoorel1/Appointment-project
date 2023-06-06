import React from "react";

const Input = ({
  register,
  labelClassName,
  disabled,
  label = "label",
  showLabel = false,
  type = "text",
  id = "input",
  inputClassName,
  placeholder = "",
  required = true,
  variant = "default",
}) => {
  switch (variant) {
    case "default":
      variant =
        "border border-[rgb(232 232 236)] bg-white focus:border-sky-500 focus:ring-1 focus:outline-none focus:ring[#66afe9]";
      break;

    case "underline":
      variant =
        "border-b border-b-[rgb(232 232 236)] bg-transparent focus:border-b-sky-500 focus:outline-none";
      break;

    default:
      break;
  }

  return (
    <div className="my-4">
      {showLabel && (
        <label
          htmlFor={id}
          className={`block mb-2 text-sm min-w-fit font-medium text-gray-900 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <input
        autoComplete="false"
        autoCorrect="false"
        {...register}
        type={type}
        id={id}
        disabled={disabled}
        className={`block w-full p-3 text-gray-900 text-md rounded-md placeholder-slate-400 ${variant} ${inputClassName}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
