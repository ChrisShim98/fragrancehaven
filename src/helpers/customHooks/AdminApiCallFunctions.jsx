import { GetTransactionAdmin, PutRefundTransaction } from "../../api/transactionRequests";
import { setLoading } from "../../redux/loadingSlice";
import { useDispatch } from "react-redux";
import { closePopup, openPopup } from "../../redux/popupSlice";
import { GetAnalytics } from "../../api/analyticsRequests";

export function useAdminApiCallFunctions() {
  const dispatch = useDispatch();

  const getTransactionsForAdmin = async (pageNumber = 1) => {
    let response = await GetTransactionAdmin(pageNumber);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      return response;
    }
    dispatch(setLoading(false));
  };

  const putRefundTransactions = async (transactionId) => {
    let response = await PutRefundTransaction(transactionId);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
    }
    dispatch(setLoading(false));
  };

  const getAnalytics = async (period, startDate, endDate) => {
    let response = await GetAnalytics(period, startDate, endDate);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      return response;
    }
    dispatch(setLoading(false));
  };

  return {
    getTransactionsForAdmin,
    putRefundTransactions,
    getAnalytics
  };
}
