import React from "react";
import { priceParse, dateParse } from "../helpers/formParser";

const TransactionCard = ({ transaction }) => {
  return (
    <div className="grid grid-cols-2 w-full max-w-[50rem] rounded-lg gap-2 place-items-start border-b-[1px] pb-4 px-4 text-start text-xs sm:text-sm">
      <p>Reciept Number:</p>
      <p>{transaction.id}</p>
      <p>Products Purchased:</p>
      <div>
        {transaction.productsPurchased.map((product) => {
          return (
            <p key={product.name + transaction.id}>
              {product.name} x {product.amount} @ ${priceParse(product.purchasedPrice)} each
            </p>
          );
        })}
      </div>
      <p>Total Spent:</p>
      <p>${priceParse(transaction.totalSpent)}</p>
      <p>Last four of card used:</p>
      <p>{transaction.lastFourOfCard}</p>
      <p>Status:</p>
      <p>{transaction.status}</p>
      <p>Date Purchased:</p>
      <p>{dateParse(transaction.datePurchased)}</p>
    </div>
  );
};

export default TransactionCard;
