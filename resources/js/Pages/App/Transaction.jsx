import BottomSheet from '@/Components/BottomSheet';
import Toast from '@/Components/Toast';
import TransactionCard from '@/Components/Transactions/TransactionCard';
import TransactionDetail from '@/Components/Transactions/TransactionDetail';
import TransactionForm from '@/Components/Transactions/TransactionForm';
import AppLayout from '@/Layouts/AppLayout';
import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const Transaction = ({ transactions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [isForm, setIsForm] = useState(false);
  const [categoryType, setCategoryType] = useState('out');
  const [toastMessage, setToastMessage] = useState('out');
  const [toastType, setToastType] = useState('out');
  const [showToast, setShowToast] = useState(false);

  const { flash } = usePage().props;

  useEffect(() => {
    if (flash.message) {
      setToastMessage(flash.message);
      setToastType(flash.type);
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        router.visit(window.location.href, {
          preserveState: true,
          preserveScroll: true,
          only: ['flash'],
          data: { flash: { message: null, type: null } },
        });
      }, 3000);

      // Cleanup function to clear timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, [flash]);

  const openModal = (
    title = modalTitle,
    transaction = null,
    type = null,
    edit = false,
  ) => {
    setIsModalOpen(true);
    setModalTitle(title);
    if (type === 'transaction-detail') {
      setIsForm(false);
      setSelectedTransaction(transaction);
    } else {
      setIsForm(true);
      if (edit) {
        setSelectedTransaction(transaction);
      }
      if (type === 'transaction-out') {
        setCategoryType('out');
      } else {
        setCategoryType('in');
      }
    }
  };

  const closeModal = () => {
    setIsForm(false);
    setIsModalOpen(false);
    setModalTitle('');
    setCategoryType('');
    setSelectedTransaction(null);
  };

  return (
    <>
      {/* toastr */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="flex flex-col items-center justify-center space-y-2">
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
