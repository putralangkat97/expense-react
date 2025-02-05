import BottomSheet from "@/Components/BottomSheet";
import TotalBalance from "@/Components/Home/TotalBalance";
import TransactionButton from "@/Components/Home/TransactionButton";
import TransactionCard from "@/Components/Transactions/TransactionCard";
import TransactionForm from "@/Components/Transactions/TransactionForm";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";

// Import Swiper styles
import Toast from "@/Components/Toast";
import TransactionEmpty from "@/Components/Transactions/TransactionEmpty";
import { useModalHook } from "@/Helpers/modalHook.js";
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
          className="relative card card-compact p-4 bg-base-200 text-base-content overflow-hidden hover:bg-base-300 transition-all duration-200"
          href={route("account.index")}
        >
          <div className="card-body z-10">
            <TotalBalance totalBalance={totalBalance} />
          </div>
          <div className="absolute -top-4 right-4">
            <Coins size={72} className="text-primary/10" />
          </div>
          <div className="absolute -bottom-8 rotate-12 right-8">
            <Banknote size={120} className="text-accent/10" />
          </div>
        </Link>
      </div>

      <div className="px-6 mt-4">
        <TransactionButton triggerModal={openTransactionModal} />
      </div>

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
                className="transition-colors duration-200 link link-primary"
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

Home.layout = (page) => <AppLayout title={"Home"}>{page}</AppLayout>;

export default Home;
