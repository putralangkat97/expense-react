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
    <div className="flex justify-around space-x-4" id="trx">
      <div className="flex flex-1 items-center">
        <PrimaryButton
          variant="default"
          type="button"
          className="w-full text-xs sm:text-md"
          onClick={() =>
            triggerModal("Buat Pengeluaran", null, "transaction-out")
          }
        >
          Pengeluaran
          <TrendingUp className="text-error size-4 sm:size-6" />
        </PrimaryButton>
      </div>
      <div className="flex flex-1 items-center">
        <PrimaryButton
          variant="default"
          type="button"
          className="w-full text-xs sm:text-md"
          onClick={() => triggerModal("Buat Pemasukan", null, "transaction-in")}
        >
          Pemasukan
          <TrendingDown className="text-success size-4 sm:size-6" />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default TransactionButton;
