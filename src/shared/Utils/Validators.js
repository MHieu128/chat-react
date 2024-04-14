export const validateLoginForm = ({ username, password }) => {
  const isUsername = validateUsername(username);
  const isPasswordValid = validatePassword(password);
  return isUsername && isPasswordValid;
};

const validateUsername = (username) => {
  return username.length > 3 && username.length < 12;
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};
