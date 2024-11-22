const TotalBalance = ({ totalBalance }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-lg sm:text-xl font-medium">Total Balance</h2>
      <h3 className="text-2xl sm:text-3xl font-bold text-primary">{totalBalance}</h3>
    </div>
  );
};

export default TotalBalance;
