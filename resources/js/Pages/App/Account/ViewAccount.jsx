import AccountCard from '@/Components/Account/AccountCard';
import AccountForm from '@/Components/Account/AccountForm';
import BottomSheet from '@/Components/BottomSheet';
import PrimaryButton from '@/Components/PrimaryButton';
import Toast from '@/Components/Toast';
import TransactionCard from '@/Components/Transactions/TransactionCard';
import TransactionDetail from '@/Components/Transactions/TransactionDetail';
import TransactionEmpty from '@/Components/Transactions/TransactionEmpty';
import TransactionForm from '@/Components/Transactions/TransactionForm';
import { useAccountHook } from '@/Helpers/AccountModalHook';
import { useTransactionHook } from '@/Helpers/TransactionModalHook';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';
import { Pencil } from 'lucide-react';

const AccountView = ({ account, transactions, accounts, categories }) => {
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

  const {
    openAccountModal,
    closeAccountModal,
    isAccountForm,
    isAccountModalOpen,
    accountModalTitle,
  } = useAccountHook();

  return (
    <>
      {/* toastr */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-center text-3xl sm:text-4xl">{account.name}</h2>
      </div>
      <div className="mt-10 flex justify-end">
        <PrimaryButton
          type="button"
          className=""
          variant="info"
          size="sm"
          onClick={() =>
            openAccountModal('Edit Account', account, 'account-edit', true)
          }
        >
          <Pencil size={16} />
        </PrimaryButton>
      </div>
      <div className="mt-2 flex flex-col space-y-2">
        <AccountCard data={account} />
      </div>

      {/* Recent transactions */}
      <div className="mt-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-neutral sm:text-2xl">
            Recent Transactions
          </h2>
          {transactions.length > 0 && (
            <Link
              href={route('transaction.index')}
              className="transition-colors duration-200 hover:link hover:link-primary"
            >
              View all
            </Link>
          )}
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          {transactions.length > 0 ? (
            transactions.map((data, key) => (
              <TransactionCard
                data={data}
                key={key}
                onClick={() =>
                  openModal('Transaction Detail', data, 'transaction-detail')
                }
              />
            ))
          ) : (
            <TransactionEmpty />
          )}
        </div>
      </div>

      <BottomSheet
        isOpen={isAccountModalOpen}
        onClose={closeAccountModal}
        title={accountModalTitle}
      >
        {isAccountForm && (
          <AccountForm closeModal={closeAccountModal} accountData={account} />
        )}
      </BottomSheet>

      <BottomSheet isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        {isForm ? (
          <TransactionForm
            accounts={accounts}
            categories={categories}
            categoryType={categoryType}
            transactionData={selectedTransaction}
            closeModal={closeModal}
            accountView
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

AccountView.layout = (page) => (
  <AppLayout title="Account View" useNavHead={false}>
    {page}
  </AppLayout>
);

export default AccountView;
