import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant='h5' sx={{ color: "white" }}>
        Welcome To NF Chat!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
