import BottomSheet from "@/Components/BottomSheet";
import TotalBalance from "@/Components/Home/TotalBalance";
import TransactionButton from "@/Components/Home/TransactionButton";
import TransactionCard from "@/Components/Transactions/TransactionCard";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import TransactionForm from "@/Components/Transactions/TransactionForm";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";

// Import Swiper styles
import AccountDetail from "@/Components/Account/AccountDetail";
import AccountForm from "@/Components/Account/AccountForm";
import Toast from "@/Components/Toast";
import TransactionEmpty from "@/Components/Transactions/TransactionEmpty";
import { useModalHook } from "@/Helpers/modalHook.js";
import "swiper/css";
import "swiper/css/pagination";
import { Banknote, Coins } from "lucide-react";

const Home = ({
  totalBalance,
  transactions,
  categories,
  accounts,
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
      <div className="px-6">
        <Link
          className="relative card card-compact p-4 bg-base-200 text-neutral-content overflow-hidden border-2 border-base-300 hover:bg-base-300 transition-all duration-300"
          href={route("account.index")}
        >
          <div className="card-body z-10">
            <TotalBalance totalBalance={totalBalance} />
          </div>
          <div className="absolute -top-4 right-4">
            <Coins size={72} className="text-base-300" />
          </div>
          <div className="absolute -bottom-8 rotate-12 right-8">
            <Banknote size={120} className="text-base-300" />
          </div>
        </Link>
      </div>

      <div className="px-6 mt-4">
        <TransactionButton triggerModal={openTransactionModal} />
      </div>

      {/* Account List */}
      {/* <div className="mt-10">
        <div className="flex items-end justify-between px-6">
          <h2 className="text-xl font-bold text-neutral sm:text-2xl">Akun</h2>
          {accounts.length > 0 && (
            <Link
              href={route("account.index")}
              className="transition-colors duration-200 hover:link hover:link-primary"
            >
              Lihat semua
            </Link>
          )}
        </div>
        <div className="mt-3 px-6">
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
      </div> */}

      {/* Recent transactions */}
      {accounts.length > 0 && (
        <div className="mt-10 px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-bold text-base-content sm:text-2xl">
              Transaksi terakhir
            </h2>
            {accounts.length > 0 && transactions.length > 0 && (
              <Link
                href={route("transaction.index")}
                className="transition-colors duration-200 hover:link hover:link-primary"
              >
                Lihat semua
              </Link>
            )}
          </div>
          <div className="mt-3 flex flex-col space-y-2">
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
            frequencies={frequencies}
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
