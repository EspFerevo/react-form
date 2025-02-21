// src/components/GenderSelect.jsx
import React from "react";

const GenderSelect = ({ label, name, register, errors }) => {
  const genderOptions = [
    { value: "male", label: "Він (М)" },
    { value: "female", label: "Вона (Ж)" },
    { value: "non-binary", label: "Вони (Небінарний)" },
    { value: "agender", label: "Оно (Агендер)" },
    { value: "other", label: "Інше" },
    { value: "prefer-not-to-say", label: "Не вказувати" },
  ];

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{label}</label>
      <div className="flex flex-wrap gap-2 mt-2">
        {genderOptions.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="form-radio text-blue-500"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default GenderSelect;
