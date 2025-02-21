// Основна форма

// src/components/Form.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import PhoneInputField from "./PhoneInput";
import DatePickerField from "./DatePicker";
import SelectField from "./SelectField";
import GenderSelect from "./GenderSelect";

const schema = yup.object().shape({
  firstName: yup.string().required("Введіть ім'я"),
  lastName: yup.string().required("Введіть прізвище"),
  email: yup.string().email("Некоректний email").required("Email обов'язковий"),
  password: yup
    .string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Пароль обов'язковий"),
  phone: yup.string().required("Введіть телефон"),
  country: yup.object().required("Оберіть країну"),
  birthDate: yup.string().required("Оберіть дату народження"),
  gender: yup.string().required("Оберіть гендерну ідентичність"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const formData = watch();

  const onSubmit = (data) => {
    console.log("Дані форми:", data);
  };

  const countryOptions = [
    { value: "ua", label: "Україна" },
    { value: "us", label: "США" },
    { value: "de", label: "Німеччина" },
  ];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Ім'я"
          name="firstName"
          register={register}
          errors={errors}
          type="text"
          placeholder="Введіть ім'я"
        />
        <InputField
          label="Прізвище"
          name="lastName"
          register={register}
          errors={errors}
          type="text"
          placeholder="Введіть прізвище"
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Введіть email"
        />
        <PasswordField
          label="Пароль"
          name="password"
          register={register}
          errors={errors}
        />
        <PhoneInputField
          label="Телефон"
          name="phone"
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <SelectField
          label="Країна"
          name="country"
          options={countryOptions}
          register={register}
          setValue={setValue}
          errors={errors}
        />
        <DatePickerField
          label="Дата народження"
          name="birthDate"
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <GenderSelect
          label="Гендерна ідентичність"
          name="gender"
          register={register}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          Відправити
        </button>
      </form>

      {/* <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold">Дані форми (реальний час):</h3>
        <pre className="bg-gray-200 p-2 rounded">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default Form;
