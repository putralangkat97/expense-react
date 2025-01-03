import ConfigHelper from '@/Helpers/ConfigHelpers.js';

const TotalBalance = ({ totalBalance }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="flex flex-col items-start justify-center">
      <h2 className="text-lg font-medium sm:text-xl">Total Uang</h2>
      <h3 className="text-2xl font-bold text-neutral-content sm:text-3xl">
        {configHelper.formatCurrency(totalBalance)}
      </h3>
    </div>
  );
};

export default TotalBalance;
