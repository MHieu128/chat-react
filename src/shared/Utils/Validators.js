export const validateLoginForm = ({ username, password }) => {
  const isUsername = validateUsername(username);
  const isPasswordValid = validatePassword(password);
};

const validateUsername = (username) => {
  return password.length > 6;
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};
