import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { useState } from "react";

function App() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Login formFields={formFields} onSetFormFields={setFormFields} />
          }
        />
        <Route
          path="dashboard"
          element={<Dashboard formfields={formFields} />}
        />
      </Routes>
    </>
  );
}

export default App;
