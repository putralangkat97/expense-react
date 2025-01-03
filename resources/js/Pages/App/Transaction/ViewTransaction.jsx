import BottomSheet from "@/Components/BottomSheet";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import TransactionForm from "@/Components/Transactions/TransactionForm";
import { useModalHook } from "@/Helpers/modalHook";
import AppLayout from "@/Layouts/AppLayout";
import { Pencil } from "lucide-react";

const TransactionView = ({
  transactions,
  accounts,
  categories,
  frequencies,
}) => {
  const {
    isModalOpen: isTransactionModalOpen,
    selectedItem: selectedTransaction,
    modalTitle: transactionModalTitle,
    isForm: isTransactionForm,
    categoryType,
    toastMessage,
    toastType,
    showToast,
    openModal: openTransactionModal,
    closeModal: closeTransactionModal,
  } = useModalHook({ type: "transaction" });
  return (
    <>
      {/* toastr */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="px-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2 className="text-center text-3xl sm:text-4xl">
            {transactions.name}
          </h2>
        </div>
        <div className="mt-10 flex flex-col space-y-2">
          <TransactionDetail data={transactions} />
          <PrimaryButton
            type="button"
            className=""
            variant="neutral"
            onClick={() =>
              openTransactionModal(
                "Edit Transaction",
                transactions,
                `transaction-${transactions.transactionType}`,
                true,
              )
            }
          >
            <Pencil size={16} />
            edit transaksi
          </PrimaryButton>
          {/* <PrimaryButton type="button" className="" variant="error">
            <Trash size={16} />
            hapus transaksi
          </PrimaryButton> */}
        </div>
      </div>

      {/* Transaction Modal */}
      <BottomSheet
        isOpen={isTransactionModalOpen}
        onClose={closeTransactionModal}
        title={transactionModalTitle}
      >
        {isTransactionForm && (
          <TransactionForm
            accounts={accounts}
            categories={categories}
            categoryType={categoryType}
            transactionData={selectedTransaction}
            frequencies={frequencies}
            closeModal={closeTransactionModal}
          />
        )}
      </BottomSheet>
    </>
  );
};

TransactionView.layout = (page) => (
  <AppLayout title="Detail Transaksi" useNavHead={false}>
    {page}
  </AppLayout>
);

export default TransactionView;
