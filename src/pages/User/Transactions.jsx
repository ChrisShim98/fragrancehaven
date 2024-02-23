import { useState, useEffect } from "react";
import TransactionCard from "../../components/TransactionCard";
import { useApiCallFunctions } from "../../helpers/customHooks/ApiCallFunctions";
import { useAdminApiCallFunctions } from "../../helpers/customHooks/AdminApiCallFunctions";
import Pagination from "../../components/Pagination";

const Transactions = ({ username, isAdmin = false }) => {
  const { getTransactionsForUser } = useApiCallFunctions();
  const { getTransactionsForAdmin } = useAdminApiCallFunctions();
  const [transactions, setTransactions] = useState([]);
  const [pagination, setPagination] = useState({});

  const GetTransactions = async (pageNumber) => {
    if (isAdmin) {
      let transactionDetails = await getTransactionsForAdmin(pageNumber);
      setTransactions(transactionDetails?.data);
      setPagination(transactionDetails?.pagination);
    } else {
      let transactionDetails = await getTransactionsForUser(
        username,
        pageNumber
      );
      setTransactions(transactionDetails?.data);
      setPagination(transactionDetails?.pagination);
    }
  };

  useEffect(() => {
    GetTransactions();
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full">
      {transactions.length <= 0 ? (
        <p>No Transactions</p>
      ) : (
        <div className="grid gap-6">
          <p className="sm:mr-auto">
            Showing page {pagination.currentPage} of {pagination.totalPages}
          </p>
          {transactions.map((transaction) => {
            return (
              <div key={transaction.id}>
                <TransactionCard transaction={transaction} isAdmin={isAdmin} />
              </div>
            );
          })}
          <Pagination
            pagination={pagination}
            getAllProducts={GetTransactions}
          />
        </div>
      )}
    </div>
  );
};

export default Transactions;
