import React from "react";

const Input = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="input-control">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
