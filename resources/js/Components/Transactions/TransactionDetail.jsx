import ConfigHelper from "@/Helpers/ConfigHelpers.js";
import { Pencil } from "lucide-react";
import CategoryIcon from "../Category/CategoryIcon";
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import { Link } from "@inertiajs/react";

const TransactionDetail = ({ data }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="card card-compact border-x-2 border-t-2 border-b-4 border-primary">
      <div className="card-body grid grid-cols-2 gap-6">
        <div>
          <InputLabel
            value={"Nama transaksi"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-gray-600">{data.name}</h2>
        </div>
        <div>
          <InputLabel
            value={"Tanggal transaksi"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-gray-600">{data.transactionDate}</h2>
        </div>
        <div>
          <InputLabel
            value={"Kategori"}
            className="text-sm font-bold sm:text-lg"
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
            value={"Jumlah"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-gray-600">
            {data.transactionType === "in" ? "" : "-"}
            {configHelper.formatCurrency(data.amount)}
          </h2>
        </div>
        <div>
          <InputLabel
            value={"Akun"}
            className="text-sm font-bold sm:text-lg"
          />
          <Link
            href={route("account.view", data.accountId)}
            className="text-gray-600 hover:underline"
          >
            {data.account_name}
          </Link>
        </div>
        <div>
          <InputLabel
            value={"Catatan"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-gray-600">{data.note || "-"}</h2>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
