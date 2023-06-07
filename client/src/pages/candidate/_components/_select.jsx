import React from "react";

// Select
let optionsSelect = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
    disabled: true,
  },
];

const _select = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="grid grid-cols-4">
      <div className="rounded-md shadow-sm bg-gray-200 md:col-start-1 md:col-end-4 mb-4 p-4">
        <div className="flex items-center flex-row justify-center">
          <div className="flex flex-col ml-5">
            <span className="mb-2 font-bold">שם המעומד</span>
            <Select
              defaultValue="lucy"
              style={{
                width: 150,
              }}
              onChange={handleChange}
              options={optionsSelect}
            />
          </div>
          <div className="flex flex-col ml-5">
            <span className="mb-2 font-bold">שם המעומד</span>
            <Select
              defaultValue="lucy"
              style={{
                width: 150,
              }}
              onChange={handleChange}
              options={optionsSelect}
            />
          </div>
          <div className="flex flex-col ml-5">
            <span className="mb-2 font-bold">שם המעומד</span>
            <Select
              defaultValue="lucy"
              style={{
                width: 150,
              }}
              onChange={handleChange}
              options={optionsSelect}
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-2 font-bold">שם המעומד</span>
            <Select
              defaultValue="lucy"
              style={{
                width: 150,
              }}
              onChange={handleChange}
              options={optionsSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default _select;
