import Transactions from "../User/Transactions";

const ViewTransactions = () => {
  return (
    <div className="flex flex-col gap-4 items-start lg:items-center">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">
        View Transactions
      </h1>
      <span className="w-24 h-4 border-black border-t-2 pb-4" />
      <div className="w-full lg:px-8 space-y-8">
        <Transactions isAdmin={true} />
      </div>
    </div>
  );
};

export default ViewTransactions;
