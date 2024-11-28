import BottomSheet from '@/Components/BottomSheet';
import Toast from '@/Components/Toast';
import TransactionCard from '@/Components/Transactions/TransactionCard';
import TransactionDetail from '@/Components/Transactions/TransactionDetail';
import TransactionForm from '@/Components/Transactions/TransactionForm';
import { useTransactionHook } from '@/Helpers/TransactionModalHook';
import AppLayout from '@/Layouts/AppLayout';

const Transaction = ({ transactions, categories, accounts }) => {
  const {
    isModalOpen,
    selectedTransaction,
    modalTitle,
    isForm,
    categoryType,
    toastMessage,
    toastType,
    showToast,
    openModal,
    closeModal,
  } = useTransactionHook();

  return (
    <>
      {/* toastr */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="flex items-center justify-center">
        <h2 className="text-center text-3xl sm:text-4xl">
          Transactions History
        </h2>
      </div>
      <div className="mt-10 flex flex-col space-y-2">
        {transactions.map((data, key) => (
          <TransactionCard
            data={data}
            key={key}
            onClick={() =>
              openModal('Transaction Detail', data, 'transaction-detail')
            }
          />
        ))}
      </div>

      <BottomSheet isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        {isForm ? (
          <TransactionForm
            accounts={accounts}
            categories={categories}
            categoryType={categoryType}
            transactionData={selectedTransaction}
            closeModal={closeModal}
          />
        ) : (
          selectedTransaction && (
            <TransactionDetail
              data={selectedTransaction}
              triggerModal={openModal}
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
