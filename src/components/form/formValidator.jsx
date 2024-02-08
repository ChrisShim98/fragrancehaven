export const emailValidation = (email) => {
  let result;
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase())
    ? (result = "")
    : (result = "Email is invalid");
  return result;
};

export const phoneNumberValidation = (phoneNumber) => {
  let result;
  /^\d{10}$/.test(phoneNumber)
    ? (result = "")
    : (result = "Phone Number is invalid");
  return result;
};

export const notNegativeNumberValidation = (number) => {
  let result;
  number > 0 ? result = "" : result = "Number should be greater than zero"
  return result;
}

export const passwordValidation = (password) => {
  let result;
  /^(?=.*[0-9])(?=.*[!@#$%^&*-])[a-zA-Z0-9!@#$%^&*-]{8,}$/.test(password)
    ? (result = "")
    : (result = "Password is invalid");
  return result;
};

export const fieldValidator = (fieldName, value) => {
    if (value === "") {
        return "Field cannot be empty"
    } else if (fieldName === "email") {
        return emailValidation(value)
    } else if (fieldName === "phone") {
        return phoneNumberValidation(value)
    } else if (fieldName === "stock" || fieldName === "price") {
      return notNegativeNumberValidation(value)
    } 
    else {
        return ""
    }
}