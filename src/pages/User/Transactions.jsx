import React, { useState, useEffect } from "react";
import TransactionCard from "../../components/TransactionCard";
import { useApiCallFunctions } from "../../helpers/customHooks/ApiCallFunctions";

const Transactions = ({ username }) => {
  const { getTransactionsForUser } = useApiCallFunctions();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getUserTransactions = async () => {
      setTransactions(await getTransactionsForUser(username));
    };
    getUserTransactions();
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full">
      {transactions.length <= 0 ? (
        <p>No Transactions</p>
      ) : (
        transactions.map((transaction) => {
          return (
            <div key={transaction.id}>
              <TransactionCard transaction={transaction} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Transactions;
