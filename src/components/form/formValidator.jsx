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
    : (result = "Please enter a valid 10-digit phone number.");
  return result;
};

export const cardNumberValidation = (cardNumber) => {
  let result;
  /^\d{16}$/.test(cardNumber)
    ? (result = "")
    : (result = "Please enter a valid 16-digit card number");
  return result;
};

export const expiryDateValidation = (expiryDate) => {
  let result;
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear().toString().slice(-2);

  if (/(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
    const [expiryMonth, expiryYear] = expiryDate.split("/");
    if (
      parseInt(expiryYear) > parseInt(currentYear) ||
      (parseInt(expiryYear) === parseInt(currentYear) &&
        parseInt(expiryMonth) >= currentMonth)
    ) {
      result = "";
    } else {
      result = "Please enter a future expiry date.";
    }
  } else {
    result = "Please enter a valid expiry date in the format MM/YY";
  }
  return result;
};

export const cvvValidation = (cvv) => {
  let result;
  /^\d{3}$/.test(cvv) ? (result = "") : (result = "Please enter a valid CVV");
  return result;
};

export const notNegativeNumberValidation = (number) => {
  let result;
  number > 0 ? (result = "") : (result = "Number should be greater than zero");
  return result;
};

export const passwordValidation = (password) => {
  let result;
  /^(?=.*[0-9])(?=.*[!@#$%^&*-])[a-zA-Z0-9!@#$%^&*-]{8,}$/.test(password)
    ? (result = "")
    : (result = "Password must be at least 8 characters long and contain at least one number and one special character (!@#$%^&*-)");
  return result;
};

export const fieldValidator = (fieldName, value) => {
  if (value === "") {
    return "Field cannot be empty";
  } else if (fieldName === "email") {
    return emailValidation(value);
  } else if (fieldName === "phone") {
    return phoneNumberValidation(value);
  } else if (fieldName === "stock" || fieldName === "price") {
    return notNegativeNumberValidation(value);
  } else if (fieldName === "cardNumber") {
    return cardNumberValidation(value);
  } else if (fieldName === "expiryDate") {
    return expiryDateValidation(value);
  } else if (fieldName === "cvv") {
    return cvvValidation(value);
  } else if (fieldName === "password") {
     return passwordValidation(value);
  }
  else {
    return "";
  }
};
