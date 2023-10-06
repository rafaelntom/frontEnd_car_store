import React from "react";

function FormInput({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
        placeholder={placeholder}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
}

export default FormInput;
