import { ArrowDownFromLine, ArrowUpFromLine, Send } from "lucide-react";
import PrimaryButton from "../PrimaryButton";

const TransactionButton = ({ triggerModal }) => {
  return (
    <div className="flex space-x-4" id="trx">
      <div className="flex flex-1 flex-col items-center">
        <PrimaryButton
          variant="neutral"
          type="button"
          className="rounded-xl w-full"
          onClick={() =>
            triggerModal("Buat Pengeluaran", null, "transaction-out")
          }
        >
          <ArrowUpFromLine size={22} />
          Pengeluaran
        </PrimaryButton>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <PrimaryButton
          variant="neutral"
          type="button"
          className="rounded-xl w-full"
          onClick={() => triggerModal("Buat Pemasukan", null, "transaction-in")}
        >
          <ArrowDownFromLine size={22} />
          Pemasukan
        </PrimaryButton>
      </div>
    </div>
  );
};

export default TransactionButton;
