export const totalUnitParse = (price, amount) => {
  return parseFloat((price * (amount ? amount : 1)).toFixed(2)).toLocaleString(
    undefined,
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
};

export const cartAmountParse = (cart) => {
  let amount = 0;
  for (let i = 0; i < cart.length; i++) {
    amount += cart[i].amount;
  }
  return amount;
};

export const cartTotalParse = (cart) => {
  let amount = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].salePercentage > 0) {
      amount += cart[i].amount * cart[i].salePrice;
    } else {
      amount += cart[i].amount * cart[i].price;
    }
  }
  return parseFloat(amount).toFixed(2).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const priceParse = (price) => {
  return parseFloat(price).toFixed(2).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const dateParse = (date) => {
  const formattedDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return formattedDate.toLocaleString("en-US", options);
};

export const formTitleParser = (input) => {
  if (input === "trn") {
    return "TRN Number";
  } else if (input === "cvv") {
    return "CVV Code";
  }
  var words = input.split(/(?=[A-Z])/);
  var result = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return result.join(" ").replace(/\bOr\b/g, "/");
};

export const removeTrailingSpaces = (form) => {};

export const parseRating = (reviews = []) => {
  let amountOfReviews = reviews.length;
  if (reviews.length === 0) {
    return 0;
  }

  let finalRating = 0;

  for (let i = 0; i < amountOfReviews; i++) {
    finalRating += reviews[i].rating;
  }
  finalRating /= amountOfReviews;
  return parseFloat(finalRating).toFixed(2);
};
