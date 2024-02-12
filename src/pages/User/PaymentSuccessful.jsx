import TransactionCard from "../../components/TransactionCard";
import { useSelector } from "react-redux";
import { selectTransaction } from "../../redux/cartSlice";
import PageHeader from "../../components/PageHeader";

const PaymentSuccessful = () => {
  const tranasactionDetails = useSelector(selectTransaction);
  return (
    <div className="flex flex-col w-screen gap-8">
      <PageHeader pageHeader={"Payment Successful"} />
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <h2 className="font-medium text-lg sm:text-xl pb-2 md:w-1/2">
          Here are your transaction details
        </h2>
        <span className="w-24 lg:w-48 h-1 border-black border-t-2 pb-4" />
        <div className="pt-12">
          <TransactionCard transaction={tranasactionDetails} />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
