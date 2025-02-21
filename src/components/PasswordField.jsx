// Поле для пароля

import React from "react";

const PasswordField = ({ label, name, register, errors }) => {
  {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">{label}</label>
        <input
          type="password"
          {...register(name)}
          className={`w-full p-2 border ${
            errors[name] ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors[name] && (
          <p className="text-red-500 text-sm">{errors[name].message}</p>
        )}
      </div>
    );
  }
};

export default PasswordField;
