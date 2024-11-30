import AccountCard from '@/Components/Account/AccountCard';
import BottomSheet from '@/Components/BottomSheet';
import Divider from '@/Components/Divider';
import TotalBalance from '@/Components/Home/TotalBalance';
import TransactionButton from '@/Components/Home/TransactionButton';
import TransactionCard from '@/Components/Transactions/TransactionCard';
import TransactionDetail from '@/Components/Transactions/TransactionDetail';
import TransactionForm from '@/Components/Transactions/TransactionForm';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import AccountDetail from '@/Components/Account/AccountDetail';
import AccountEmpty from '@/Components/Account/AccountEmpty';
import AccountForm from '@/Components/Account/AccountForm';
import Toast from '@/Components/Toast';
import TransactionEmpty from '@/Components/Transactions/TransactionEmpty';
import { useAccountHook } from '@/Helpers/AccountModalHook';
import { useTransactionHook } from '@/Helpers/TransactionModalHook';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = ({ totalBalance, transactions, categories, accounts }) => {
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
    selectedAccount,
    isAccountModalOpen,
    accountModalTitle,
    isAccountForm,
    accountToastMessage,
    accountToastType,
    showAccountToast,
    openAccountModal,
    closeAccountModal,
  } = useAccountHook();

  return (
    <>
      {/* toastr for account */}
      {showAccountToast && (
        <Toast
          message={accountToastMessage}
          type={accountToastType}
          show={showAccountToast}
        />
      )}

      {/* toastr for transaction */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      {/* balance */}
      <div className="card card-compact border-x-2 border-b-4 border-t-2 border-primary bg-base-200">
        <div className="card-body">
          {/* total balance */}
          <TotalBalance totalBalance={totalBalance} />
          <Divider className={'my-2'} />
          <TransactionButton triggerModal={openModal} />
        </div>
      </div>

      {/* Account List */}
      <div className="mt-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-neutral sm:text-2xl">
            Accounts
          </h2>
          {accounts.length > 0 && (
            <Link
              href={route('account.index')}
              className="transition-colors duration-200 hover:link hover:link-primary"
            >
              View all
            </Link>
          )}
        </div>
        <div className="mt-4">
          {accounts.length > 0 ? (
            <Swiper
              grabCursor={true}
              spaceBetween={32}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              {accounts.map((acc, key) => (
                <SwiperSlide key={key}>
                  <AccountCard data={acc} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <AccountEmpty triggerModal={openAccountModal} />
          )}
        </div>
      </div>

      {/* Recent transactions */}
      {accounts.length > 0 && (
        <div className="mt-6">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-bold text-neutral sm:text-2xl">
              Recent Transactions
            </h2>
            {accounts.length > 0 ||
              (transactions.length > 0 && (
                <Link
                  href={route('transaction.index')}
                  className="transition-colors duration-200 hover:link hover:link-primary"
                >
                  View all
                </Link>
              ))}
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
      )}

      <BottomSheet
        isOpen={isAccountModalOpen}
        onClose={closeAccountModal}
        title={accountModalTitle}
      >
        {isAccountForm ? (
          <AccountForm
            accountData={selectedAccount}
            closeModal={closeAccountModal}
          />
        ) : (
          selectedAccount && (
            <AccountDetail
              data={selectedAccount}
              triggerModal={openAccountModal}
            />
          )
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

Home.layout = (page) => <AppLayout title={'Home'}>{page}</AppLayout>;

export default Home;
