// Телефон

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ label, name, register, setValue, errors }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{label}</label>
      <PhoneInput
        country={"ua"}
        onChange={(value) => setValue(name, value)}
        inputClass={`w-full p-2 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-md`}
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default PhoneInputField;
