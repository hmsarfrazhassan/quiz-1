import Loginform from "../components/login/Loginform";

function Login({ formFields, onSetFormFields }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2">
      <div className="text-4xl">Login</div>
      <Loginform formFields={formFields} onSetFormFields={onSetFormFields} />
    </div>
  );
}

export default Login;
