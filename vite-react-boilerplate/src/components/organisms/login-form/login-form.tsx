import FormInput from "components/molecules/form-input/form-input";

const LoginForm = () => {
  const handleLogin = (value: string) => {
    console.log("Logging in with:", value);
  };

  return (
    <div>
      <h2>Login</h2>
      <FormInput
        label="Username"
        placeholder="Enter your username"
        buttonText="Next"
        onSubmit={handleLogin}
      />
      <FormInput
        label="Password"
        inputType="password"
        placeholder="Enter your password"
        buttonText="Login"
        onSubmit={handleLogin}
      />
    </div>
  );
};

export default LoginForm;
