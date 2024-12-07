import BottomSheet from "@/Components/BottomSheet";
import Toast from "@/Components/Toast";
import TransactionCard from "@/Components/Transactions/TransactionCard";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import TransactionEmpty from "@/Components/Transactions/TransactionEmpty";
import TransactionForm from "@/Components/Transactions/TransactionForm";
import { useModalHook } from "@/Helpers/modalHook";
import { useTransactionHook } from "@/Helpers/TransactionModalHook";
import AppLayout from "@/Layouts/AppLayout";

const Transaction = ({ transactions, categories, accounts }) => {
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
        <div className="flex items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl">
            Catatan Transaksi
          </h2>
        </div>
        <div className="mt-10 flex flex-col space-y-2">
          {transactions.length > 0 ? (
            transactions.map((data, key) => (
              <TransactionCard
                data={data}
                key={key}
                onClick={() =>
                  openTransactionModal(
                    "Transaction Detail",
                    data,
                    "transaction-detail",
                  )
                }
              />
            ))
          ) : (
            <TransactionEmpty />
          )}
        </div>
      </div>

      {/* Transaction Modal */}
      <BottomSheet
        isOpen={isTransactionModalOpen}
        onClose={closeTransactionModal}
        title={transactionModalTitle}
      >
        {isTransactionForm ? (
          <TransactionForm
            accounts={accounts}
            categories={categories}
            categoryType={categoryType}
            transactionData={selectedTransaction}
            closeModal={closeTransactionModal}
          />
        ) : (
          selectedTransaction && (
            <TransactionDetail
              data={selectedTransaction}
              triggerModal={openTransactionModal}
            />
          )
        )}
      </BottomSheet>
    </>
  );
};

Transaction.layout = (page) => (
  <AppLayout title="Transactions" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Transaction;
