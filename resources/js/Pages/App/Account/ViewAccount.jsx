import AccountCard from "@/Components/Account/AccountCard";
import AccountForm from "@/Components/Account/AccountForm";
import BottomSheet from "@/Components/BottomSheet";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import TransactionCard from "@/Components/Transactions/TransactionCard";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import TransactionEmpty from "@/Components/Transactions/TransactionEmpty";
import TransactionForm from "@/Components/Transactions/TransactionForm";
import { useModalHook } from "@/Helpers/modalHook";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import { Pencil } from "lucide-react";

const AccountView = ({ account, transactions, accounts, categories }) => {
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
    modalTitle: accountModalTitle,
    isForm: isAccountForm,
    openModal: openAccountModal,
    closeModal: closeAccountModal,
  } = useModalHook({ type: "account" });

  return (
    <>
      {/* toastr */}
      {showToast && (
        <Toast message={toastMessage} type={toastType} show={showToast} />
      )}

      <div className="px-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2 className="text-center text-3xl sm:text-4xl">{account.name}</h2>
        </div>
        <div className="mt-10 flex flex-col space-y-4">
          <AccountCard data={account} />
          <PrimaryButton
            type="button"
            variant="neutral"
            onClick={() =>
              openAccountModal("Edit Akun", account, "account-edit", true)
            }
          >
            <Pencil size={16} />
            edit akun
          </PrimaryButton>
        </div>

        {/* Recent transactions */}
        <div className="mt-6">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-bold text-base-content sm:text-2xl">
              Transaksi terakhir
            </h2>
            {transactions.length > 0 && (
              <Link
                href={route("transaction.index")}
                className="transition-colors duration-200 hover:link hover:link-primary"
              >
                Lihat semua
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

AccountView.layout = (page) => (
  <AppLayout title="Account View" useNavHead={false}>
    {page}
  </AppLayout>
);

export default AccountView;
