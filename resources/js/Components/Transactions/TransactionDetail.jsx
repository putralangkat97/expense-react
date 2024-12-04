import ConfigHelper from "@/Helpers/ConfigHelpers.js";
import { Pencil } from "lucide-react";
import CategoryIcon from "../Category/CategoryIcon";
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";

const TransactionDetail = ({ data }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="card card-compact border-x-2 border-t-2 border-b-4 border-primary">
      <div className="card-body grid grid-cols-2 gap-6">
        <div>
          <InputLabel
            value={"Transaction Name"}
            className="text-sm font-medium sm:text-lg"
          />
          <h2 className="text-gray-600">{data.name}</h2>
        </div>
        <div>
          <InputLabel
            value={"Transaction Date"}
            className="text-sm font-medium sm:text-lg"
          />
          <h2 className="text-gray-600">{data.transactionDate}</h2>
        </div>
        <div>
          <InputLabel
            value={"Category"}
            className="text-sm font-medium sm:text-lg"
          />
          <div className="flex items-center space-x-1 text-gray-600">
            <div>
              <CategoryIcon category={data.category_name} size={18} />
            </div>
            <div className="">{data.category_name}</div>
          </div>
        </div>
        <div>
          <InputLabel
            value={"Amount"}
            className="text-sm font-medium sm:text-lg"
          />
          <h2 className="text-gray-600">
            {data.transactionType === "in" ? "" : "-"}
            {configHelper.formatCurrency(data.amount)}
          </h2>
        </div>
        <div>
          <InputLabel
            value={"Account"}
            className="text-sm font-medium sm:text-lg"
          />
          <h2 className="text-gray-600">{data.account_name}</h2>
        </div>
        <div>
          <InputLabel
            value={"Note"}
            className="text-sm font-medium sm:text-lg"
          />
          <h2 className="text-gray-600">{data.note || "-"}</h2>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
