import React, { useState } from "react";
import FormInput from "../../../components/FormInput";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const { name, email, password, confirmPassword } = formData;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    alert(`You are signed up with name: ${name}, email: ${email}`);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  const formFields = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      value: formData.name,
      required: true
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: formData.email,
      required: true
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: formData.password,
      required: true
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      value: formData.confirmPassword,
      required: true
    }
  ];

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        
        {formFields.map((field) => (
          <FormInput
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            onChange={handleChange}
            required={field.required}
          />
        ))}
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;