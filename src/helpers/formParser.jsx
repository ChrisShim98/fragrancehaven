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
    amount += cart[i].amount * cart[i].price;
  }
  return parseFloat(amount).toFixed(2).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
