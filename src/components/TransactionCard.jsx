import React from "react";
import { priceParse, dateParse } from "../helpers/formParser";
import { useAdminApiCallFunctions } from "../helpers/customHooks/AdminApiCallFunctions";

const TransactionCard = ({ transaction, isAdmin, GetTransactions = () => {}, currentPage }) => {
  const { putRefundTransactions } = useAdminApiCallFunctions();
  return (
    <div className="grid grid-cols-2 w-full max-w-[50rem] rounded-lg gap-2 place-items-start border-b-[1px] pb-4 px-4 text-start text-xs sm:text-sm">
      <p>Reciept Number:</p>
      <p>{transaction.id}</p>
      <p>Products Purchased:</p>
      <div>
        {transaction.productsPurchased.map((product) => {
          return (
            <p key={product.name + transaction.id}>
              {product.name} x {product.amount} @ $
              {priceParse(product.purchasedPrice)} each
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
      {isAdmin && (
        <div className="grid grid-cols-2 w-full gap-2 col-span-2">
          <p>Customer Name:</p>
          <p>{transaction.userName}</p>
          <p>Customer Email:</p>
          <p>{transaction.userEmail}</p>
          {transaction.status === "Refunded" && (
            <div className="grid grid-cols-2 w-full gap-2 col-span-2">
              <p>Refunded Date:</p>
              <p>{dateParse(transaction.refundedDate)}</p>
            </div>
          )}
          {transaction.status !== "Refunded" && (
            <button
              onClick={async () => {
                await putRefundTransactions(transaction.id);
                GetTransactions(currentPage)
              }}
              className="bg-red-500 rounded-lg text-white p-2 hover:bg-red-600 transition-colors duration-500 col-span-2 mt-4 place-self-end"
            >
              Refund Transaction
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
