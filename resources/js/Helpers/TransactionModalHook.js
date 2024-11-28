import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export const useTransactionHook = (options = {}) => {
  const { initialModalTitle = 'Modal Title', initialCategoryType = 'out' } =
    options;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalTitle, setModalTitle] = useState(initialModalTitle);
  const [isForm, setIsForm] = useState(false);
  const [categoryType, setCategoryType] = useState(initialCategoryType);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
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
    title = initialModalTitle,
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
    setModalTitle(initialModalTitle);
    setCategoryType(initialCategoryType);
    setSelectedTransaction(null);
  };

  return {
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
    setToastMessage,
    setToastType,
    setShowToast,
  };
};
