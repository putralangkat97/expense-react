import { ArrowDownFromLine, ArrowUpFromLine, Send } from "lucide-react";
import PrimaryButton from "../PrimaryButton";

const TransactionButton = ({ triggerModal }) => {
  return (
    <div className="flex justify-start space-x-4" id="trx">
      <div className="flex flex-col items-center">
        <PrimaryButton
          variant="neutral"
          type="button"
          className="rounded-xl"
          onClick={() =>
            triggerModal("Buat Pengeluaran", null, "transaction-out")
          }
        >
          <ArrowUpFromLine size={22} />
          Pengeluaran
        </PrimaryButton>
      </div>
      <div className="flex flex-col items-center">
        <PrimaryButton
          variant="neutral"
          type="button"
          className="rounded-xl"
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
