import { ArrowDownFromLine, ArrowUpFromLine, Send } from "lucide-react";

const TransactionButton = ({ triggerModal }) => {
  return (
    <div className="flex justify-start space-x-4" id="trx">
      <div className="flex flex-col items-center">
        <button
          className="btn btn-neutral rounded-full py-2 px-3 border-2 border-neutral text-neutral-content hover:border-neutral hover:text-neutral-content hover:btn-neutral"
          type="button"
          onClick={() =>
            triggerModal("Buat Pengeluaran", null, "transaction-out")
          }
        >
          <ArrowUpFromLine size={22} />
          Pengeluaran
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-neutral rounded-full py-2 px-3 border-2 border-neutral text-neutral-content hover:border-neutral hover:text-neutral-content hover:btn-neutral"
          type="button"
          onClick={() => triggerModal("Buat Pemasukan", null, "transaction-in")}
        >
          <ArrowDownFromLine size={22} />
          Pemasukan
        </button>
      </div>
    </div>
  );
};

export default TransactionButton;
