export const validateLoginForm = ({ username, password }) => {
  return validateUsername(username) && validatePassword(password);
};

export const validateRegisterForm = ({ mail, password, username }) => {
  return (
    validateMail(mail) &&
    validateUsername(username) &&
    validatePassword(password)
  );
};

const validateMail = (mail) => {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateUsername = (username) => {
  return username.length > 3 && username.length < 12;
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};
