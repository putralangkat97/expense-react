import AccountCard from '@/Components/Account/AccountCard';
import AccountDetail from '@/Components/Account/AccountDetail';
import AccountEmpty from '@/Components/Account/AccountEmpty';
import AccountForm from '@/Components/Account/AccountForm';
import BottomSheet from '@/Components/BottomSheet';
import PrimaryButton from '@/Components/PrimaryButton';
import Toast from '@/Components/Toast';
import { useAccountHook } from '@/Helpers/AccountModalHook';
import AppLayout from '@/Layouts/AppLayout';
import { CirclePlus } from 'lucide-react';

const Account = ({ accounts }) => {
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

      <div className="flex items-center justify-center">
        <h2 className="text-center text-3xl sm:text-4xl">Account List</h2>
      </div>
      <div className="mt-10 flex justify-end">
        <PrimaryButton
          type="button"
          className="btn-block"
          variant="success"
          size="sm"
          onClick={() =>
            openAccountModal('Create Account', null, 'account-create', true)
          }
        >
          <CirclePlus size={16} />
          Add Account
        </PrimaryButton>
      </div>
      <div className="mt-2 flex flex-col space-y-2">
        {accounts.length > 0 ? (
          accounts.map((acc, key) => <AccountCard data={acc} key={key} />)
        ) : (
          <AccountEmpty />
        )}
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
