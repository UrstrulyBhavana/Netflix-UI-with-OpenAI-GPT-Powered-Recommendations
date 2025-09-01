export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password must be 8+ chars and include uppercase, lowercase and a number.";
  return null;
};
