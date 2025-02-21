// Дата народження
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ label, name, register, setValue, errors }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{label}</label>
      <DatePicker
        className={`w-full p-2 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-md`}
        selected={register(name).value}
        onChange={(date) => setValue(name, date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Оберіть дату"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default DatePickerField;
