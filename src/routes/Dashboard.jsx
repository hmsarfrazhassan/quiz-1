import { useEffect } from "react";

import { Navbar } from "../components/dashboard/Navbar";

function Dashboard({ formfields }) {
  const { email } = formfields;

  useEffect(() => {
    console.log("user successfully logged in");
  }, [email]);
  return (
    <div className="h-screen w-screen p-6">
      <Navbar />
      <div>Welcome {formfields.email}</div>
    </div>
  );
}

export default Dashboard;
