import ConfigHelper from "@/Helpers/ConfigHelpers.js";
import CategoryIcon from "../Category/CategoryIcon";
import { Link } from "@inertiajs/react";

const TransactionCard = ({ data }) => {
  const configHelper = new ConfigHelper();
  return (
    <Link
      href={route("transaction.view", data.id)}
      className={
        "card card-compact sm:p-2 cursor-pointer bg-base-200 border-2 border-base-200"
      }
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={
                "rounded-full p-2 hover:text-base-100 bg-neutral text-neutral-content"
              }
            >
              <CategoryIcon category={data.category_name} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div
                className="tooltip font-bold text-base-content"
                data-tip={data.name}
              >
                {data.name.length > 12
                  ? data.name.slice(0, 12) + ".."
                  : data.name}
              </div>
              <div className="text-sm text-base-content">
                {data.transactionDate}
              </div>
            </div>
          </div>
          <div
            className={
              data.transactionType === "in" ? "text-green-700" : "text-red-700"
            }
          >
            {data.transactionType === "in" ? "" : "-"}
            {configHelper.formatCurrency(data.amount)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TransactionCard;
