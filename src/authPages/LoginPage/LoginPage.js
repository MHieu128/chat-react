import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLoginForm({ username, password }));
  }, [username, password, setIsFormValid]);
  const handleLogin = () => {
    console.log("Login in");
  };
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
