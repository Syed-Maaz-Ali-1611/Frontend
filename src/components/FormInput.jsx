import React from "react";

const FormInput = ({ 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false ,
  className = ''
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className={className}
    autoComplete={type === "password" ? "new-password" : "off"}
  />
);

export default FormInput;