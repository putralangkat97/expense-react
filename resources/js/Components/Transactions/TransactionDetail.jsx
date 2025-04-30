import ConfigHelper from "@/Helpers/ConfigHelpers.js";
import CategoryIcon from "../Category/CategoryIcon";
import InputLabel from "../InputLabel";
import { Link } from "@inertiajs/react";

const TransactionDetail = ({ data }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="card card-sm sm:card-md bg-base-300 mb-2">
      <div className="card-body grid grid-cols-2 gap-6">
        <div>
          <InputLabel
            value={"Nama transaksi"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-base-content">{data.name}</h2>
        </div>
        <div>
          <InputLabel
            value={"Tanggal transaksi"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-base-content">{data.transactionDate}</h2>
        </div>
        <div>
          <InputLabel
            value={"Kategori"}
            className="text-sm font-bold sm:text-lg"
          />
          <div className="flex items-center space-x-1 text-base-content">
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
          <h2
            className={
              data.transactionType === "in" ? "text-success" : "text-error"
            }
          >
            {data.transactionType === "in" ? "" : "-"}
            {configHelper.formatCurrency(data.amount)}
          </h2>
        </div>
        <div>
          <InputLabel value={"Akun"} className="text-sm font-bold sm:text-lg" />
          <Link
            href={route("account.view", data.accountId)}
            className="text-base-content hover:underline"
          >
            {data.account_name}
          </Link>
        </div>
        <div>
          <InputLabel
            value={"Catatan"}
            className="text-sm font-bold sm:text-lg"
          />
          <h2 className="text-base-content">{data.note || "-"}</h2>
        </div>
        {data.is_recurring == "1" && (
          <>
            <div>
              <InputLabel
                value={"Transaksi Berulang"}
                className="text-sm font-bold sm:text-lg"
              />
              <h2 className="text-base-content">{data.frequency_id}</h2>
            </div>
            <div>
              <InputLabel
                value={"Transaksi selanjutnya"}
                className="text-sm font-bold sm:text-lg"
              />
              <h2 className="text-base-content">{data.next_due_date}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionDetail;
