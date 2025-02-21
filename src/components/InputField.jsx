// Поле введення

import React from "react";

const InputField = ({ label, type, name, register, errors, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{label}</label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full p-2 border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-md`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
