import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const credencials = {
  email: "test@mail.com",
  password: "111111",
};

const Loginform = ({ formFields, onSetFormFields }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    onSetFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formFields.email || !formFields.password) {
      setError("Email and Password must not be empty fields");
    } else if (
      credencials.email === formFields.email &&
      credencials.password === formFields.password
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("User does not exist.");
    }
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  return (
    <div>
      <p className="text-center">
        creds: <br />
        <span>test@mail.com</span> <br /> <span>111111</span>
      </p>
      <form onSubmit={handleSubmit} className="p-10">
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={formFields.email}
          onChange={handleChange}
          className="h-10 w-full mb-2 rounded-md px-2 py-1 ring-2 ring-blue-500 focus:ring-blue-700"
        />
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={formFields.password}
          onChange={handleChange}
          className="h-10 w-full mb-2 rounded-md px-2 py-1 ring-2 ring-blue-500 focus:ring-blue-700"
        />
        <button
          type="submit"
          className="cursor-pointer h-10 w-full mb-2 text-center bg-blue-700 text-white rounded-md px-2 py-1 ring-2 ring-blue-500 active:ring-blue-700"
        >
          Login
        </button>
      </form>

      {error && (
        <div className="rounded-sm bg-rose-500 text-white p-2">{error}</div>
      )}
    </div>
  );
};

export default Loginform;
