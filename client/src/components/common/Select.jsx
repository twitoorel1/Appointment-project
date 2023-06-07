import React from "react";

const Select = ({ defaultValue, onChange, options }) => {
  return (
    <>
      <Select
        defaultValue={defaultValue}
        // style={{
        //   width: 120,
        // }}
        onChange={onChange}
        options={options}
      />
    </>
  );
};

export default Select;
