import AccountCard from "@/Components/Account/AccountCard";
import AccountDetail from "@/Components/Account/AccountDetail";
import AccountEmpty from "@/Components/Account/AccountEmpty";
import AccountForm from "@/Components/Account/AccountForm";
import BottomSheet from "@/Components/BottomSheet";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import { useModalHook } from "@/Helpers/modalHook";
import AppLayout from "@/Layouts/AppLayout";
import { CirclePlus } from "lucide-react";

const Account = ({ accounts }) => {
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
      {/* toastr for account */}
      {showAccountToast && (
        <Toast
          message={accountToastMessage}
          type={accountToastType}
          show={showAccountToast}
        />
      )}

      <div className="px-6">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl">Daftar Akun</h2>
        </div>
        <div className="mt-10 mb-4 flex justify-end">
          <PrimaryButton
            type="button"
            className="btn-block rounded-xl"
            variant="default"
            onClick={() =>
              openAccountModal("Buat Akun", null, "account-create", true)
            }
          >
            Buat Akun Baru
            <CirclePlus size={16} className="text-primary" />
          </PrimaryButton>
        </div>
        <div className="mt-2 flex flex-col space-y-2">
          {accounts.length > 0 ? (
            accounts.map((acc, key) => <AccountCard data={acc} key={key} />)
          ) : (
            <AccountEmpty title="No account" />
          )}
        </div>
      </div>

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
    </>
  );
};

Account.layout = (page) => (
  <AppLayout title="Account" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Account;
