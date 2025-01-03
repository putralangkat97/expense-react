import ConfigHelper from "@/Helpers/ConfigHelpers.js";
import { Link } from "@inertiajs/react";

const AccountCard = ({ data }) => {
  const configHelper = new ConfigHelper();

  return (
    <Link
      as="button"
      href={route("account.view", data.id)}
      className="card card-compact mx-auto h-40 w-full border-2 border-neutral bg-base-200 text-base-content"
    >
      <div className="card-body flex w-full flex-row justify-between">
        <div className="flex flex-col items-start justify-end">
          <div className="text-sm">Total Balance</div>
          <div className="mb-2 text-xl font-bold">
            {configHelper.formatCurrency(data.balance)}
          </div>
        </div>
        <div className="font-bold">{data.name}</div>
      </div>
    </Link>
  );
};

export default AccountCard;
