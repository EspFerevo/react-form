// Вибір країни

import React from "react";
import Select from "react-select";

const SelectField = ({ label, name, options, register, setValue, errors }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{label}</label>
      <Select
        options={options}
        onChange={(selectedOption) => setValue(name, selectedOption)}
        className="basic-single"
        classNamePrefix="select"
        placeholder="Оберіть країну"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default SelectField;
