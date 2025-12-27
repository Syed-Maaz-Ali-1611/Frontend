import React, { useState } from "react";
import FormInput from "../../../components/FormInput";
function SignInForm() {
    
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    const { email, password } = formData;
    
    alert(`You are login with email: ${email} and password: ${password}`);
    resetForm();    
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: ""
    });
  };

  const formFields = [
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
    }
  ];

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <span>or use your account</span>
        
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
        
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;