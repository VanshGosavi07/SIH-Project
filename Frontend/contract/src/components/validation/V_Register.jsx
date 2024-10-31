// register page validation page
export const validateRegistrationForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!formData.emailId) {
    errors.emailId = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
    errors.emailId = "Email address is invalid";
  }

  // User Type validation
  if (!formData.userType) {
    errors.userType = "User Type is required";
  }

  // Password validation
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};
