import AccountCard from "@/Components/Account/AccountCard";
import BottomSheet from "@/Components/BottomSheet";
import Divider from "@/Components/Divider";
import TotalBalance from "@/Components/Home/TotalBalance";
import TransactionButton from "@/Components/Home/TransactionButton";
import TransactionCard from "@/Components/Transactions/TransactionCard";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import TransactionForm from "@/Components/Transactions/TransactionForm";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import AccountDetail from "@/Components/Account/AccountDetail";
import AccountEmpty from "@/Components/Account/AccountEmpty";
import AccountForm from "@/Components/Account/AccountForm";
import Toast from "@/Components/Toast";
import TransactionEmpty from "@/Components/Transactions/TransactionEmpty";
import { useModalHook } from "@/Helpers/modalHook.js";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = ({ totalBalance, transactions, categories, accounts }) => {
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

  const {
    isModalOpen: isAccountModalOpen,
    selectedItem: selectedAccount,
    modalTitle: accountModalTitle,
    isForm: isAccountForm,
    toastMessage: accountToastMessage,
    toastType: accountToastType,
    showToast: showAccountToast,
    openModal: openAccountModal,
    closeModal: closeAccountModal,
  } = useModalHook({ type: "account" });

  return (
    <>
      {/* Account Toast */}
      {showAccountToast && (
        <Toast
          message={accountToastMessage}
          type={accountToastType}
          show={showAccountToast}
        />
      )}

      {/* Transaction Toast */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      {/* Balance */}
      <div className="card card-compact border-x-2 border-b-4 border-t-2 border-primary bg-base-200">
        <div className="card-body">
          <TotalBalance totalBalance={totalBalance} />
          <Divider className={"my-2"} />
          <TransactionButton triggerModal={openTransactionModal} />
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
              href={route("account.index")}
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
            {accounts.length > 0 && transactions.length > 0 && (
              <Link
                href={route("transaction.index")}
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
      )}

      {/* Account Modal */}
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

Home.layout = (page) => <AppLayout title={"Home"}>{page}</AppLayout>;

export default Home;
