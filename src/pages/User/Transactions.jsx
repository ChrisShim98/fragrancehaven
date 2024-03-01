import { useState, useEffect } from "react";
import TransactionCard from "../../components/TransactionCard";
import { useApiCallFunctions } from "../../helpers/customHooks/ApiCallFunctions";
import { useAdminApiCallFunctions } from "../../helpers/customHooks/AdminApiCallFunctions";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { selectAdminTransactionSearch, setAdminTransactionSearch } from "../../redux/searchSlice";

const Transactions = ({ username, isAdmin = false }) => {
  const dispatch = useDispatch();
  const transactionSearchDetails = useSelector(selectAdminTransactionSearch);
  const { getTransactionsForUser } = useApiCallFunctions();
  const { getTransactionsForAdmin } = useAdminApiCallFunctions();
  const [transactions, setTransactions] = useState([]);
  const [pagination, setPagination] = useState({});
  const [searchWord, setSearchWord] = useState("");

  const GetTransactions = async (pageNumber, searchQuery = "") => {
    if (transactionSearchDetails.isActive) {
      searchQuery = transactionSearchDetails.query;
    }
    if (isAdmin) {
      let transactionDetails = await getTransactionsForAdmin(pageNumber, searchQuery);
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
    setSearchWord(transactionSearchDetails.query);
  }, []);

  useEffect(() => {
    GetTransactions();
  }, [
    transactionSearchDetails.query,
  ]);

  const searchTransactions = async (searchKey) => {
    if (searchKey === "") {
      await dispatch(
        setAdminTransactionSearch({
          query: "",
          isActive: false,
        })
      );
    } else {
      await dispatch(
        setAdminTransactionSearch({
          query: searchKey,
          isActive: true,
        })
      );
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {isAdmin && <p className="font-semibold">You can search by either the receipt number or the customer name</p>}
      {isAdmin && <SearchBar isAdmin={isAdmin} placeHolder={"Search Transactions"} searchProducts={searchTransactions} searchWord={searchWord} setSearchWord={setSearchWord}/>}
      {transactions.length <= 0 ? (
        <p>No Transactions</p>
      ) : (
        <div className="grid gap-8">
          <p className="sm:mr-auto">
            Showing page {pagination.currentPage} of {pagination.totalPages}
          </p>
          {transactions.map((transaction) => {
            return (
              <div key={transaction.id}>
                <TransactionCard transaction={transaction} isAdmin={isAdmin} GetTransactions={GetTransactions} currentPage={pagination.currentPage} />
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
