import { GetTransactionAdmin } from "../../api/transactionRequests";
import { setLoading } from "../../redux/loadingSlice";
import { useDispatch } from "react-redux";
import { closePopup, openPopup } from "../../redux/popupSlice";

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

  return {
    getTransactionsForAdmin,
  };
}
