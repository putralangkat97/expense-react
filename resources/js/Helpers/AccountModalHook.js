import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export const useAccountHook = (options = {}) => {
  const { initialAccountAccountModalTitle = 'Modal Title' } = options;

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [accountModalTitle, setAccountModalTitle] = useState(
    initialAccountAccountModalTitle,
  );
  const [isAccountForm, setIsAccountForm] = useState(false);
  const [accountToastMessage, setAccountToastMessage] = useState('');
  const [accountToastType, setAccountToastType] = useState('');
  const [showAccountToast, setShowAccountToast] = useState(false);

  const { flash } = usePage().props;

  useEffect(() => {
    if (flash.message) {
      setAccountToastMessage(flash.message);
      setAccountToastType(flash.type);
      setShowAccountToast(true);

      const timer = setTimeout(() => {
        setShowAccountToast(false);
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

  const openAccountModal = (
    title = initialAccountAccountModalTitle,
    account = null,
    type = null,
    edit = false,
  ) => {
    setIsAccountModalOpen(true);
    setAccountModalTitle(title);

    if (type === 'account-detail') {
      setIsAccountForm(false);
      setSelectedAccount(account);
    } else {
      setIsAccountForm(true);
      if (edit) {
        setSelectedAccount(account);
      }
    }
  };

  const closeAccountModal = () => {
    setIsAccountForm(false);
    setIsAccountModalOpen(false);
    setAccountModalTitle(initialAccountAccountModalTitle);
    setSelectedAccount(null);
  };

  return {
    isAccountModalOpen,
    selectedAccount,
    accountModalTitle,
    isAccountForm,
    accountToastMessage,
    accountToastType,
    showAccountToast,
    openAccountModal,
    closeAccountModal,
    setAccountToastMessage,
    setAccountToastType,
    setShowAccountToast,
  };
};
