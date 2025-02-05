import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  Send,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import PrimaryButton from "../PrimaryButton";

const TransactionButton = ({ triggerModal }) => {
  return (
    <div className="flex space-x-4" id="trx">
      <div className="flex flex-1 flex-col items-center">
        <PrimaryButton
          variant="default"
          type="button"
          className="rounded-xl w-full"
          onClick={() =>
            triggerModal("Buat Pengeluaran", null, "transaction-out")
          }
        >
          Pengeluaran
          <TrendingUp size={22} className="text-error" />
        </PrimaryButton>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <PrimaryButton
          variant="default"
          type="button"
          className="rounded-xl w-full"
          onClick={() => triggerModal("Buat Pemasukan", null, "transaction-in")}
        >
          Pemasukan
          <TrendingDown size={22} className="text-success" />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default TransactionButton;
