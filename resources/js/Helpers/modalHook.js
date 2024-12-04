import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export const useModalHook = (options = {}) => {
  const {
    initialModalTitle = "Modal Title",
    initialCategoryType = "out",
    type = "transaction",
  } = options;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalTitle, setModalTitle] = useState(initialModalTitle);
  const [isForm, setIsForm] = useState(false);
  const [categoryType, setCategoryType] = useState(initialCategoryType);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
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
          only: ["flash"],
          data: { flash: { message: null, type: null } },
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [flash]);

  const openModal = (
    title = initialModalTitle,
    item = null,
    modalType = null,
    edit = false,
  ) => {
    setIsModalOpen(true);
    setModalTitle(title);

    if (modalType === `${type}-detail`) {
      setIsForm(false);
      setSelectedItem(item);
    } else {
      setIsForm(true);
      if (edit) {
        setSelectedItem(item);
      }

      if (type === "transaction") {
        setCategoryType(modalType === `${type}-out` ? "out" : "in");
      }
    }
  };

  const closeModal = () => {
    setIsForm(false);
    setIsModalOpen(false);
    setModalTitle(initialModalTitle);
    setCategoryType(initialCategoryType);
    setSelectedItem(null);
  };

  return {
    isModalOpen,
    selectedItem,
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

export const useTransactionHook = (options = {}) =>
  useModalHook({ ...options, type: "transaction" });

export const useAccountHook = (options = {}) =>
  useModalHook({ ...options, type: "account" });
