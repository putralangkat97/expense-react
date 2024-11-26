import ConfigHelper from '@/Helpers/ConfigHelpers.js';

const AccountCard = ({ data }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="card card-compact h-40 border-x-2 border-b-4 border-t-2 border-primary bg-base-200">
      <div className="card-body flex flex-row justify-between">
        <div className="flex flex-col justify-end">
          <div className="text-sm">Total Balance</div>
          <div className="mb-2 text-xl font-bold">
            {configHelper.formatCurrency(data.balance)}
          </div>
        </div>
        <div className="font-bold">{data.name}</div>
      </div>
    </div>
  );
};

export default AccountCard;
