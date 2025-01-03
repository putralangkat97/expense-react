import ConfigHelper from "@/Helpers/ConfigHelpers.js";
import { useForm } from "@inertiajs/react";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import { useEffect, useState } from "react";
import { CircleHelp } from "lucide-react";
import InputLabel from "../InputLabel";

const TransactionForm = ({
  accounts,
  categories,
  categoryType,
  transactionData = null,
  frequencies,
  closeModal,
}) => {
  const configHelper = new ConfigHelper();
  console.log(transactionData);
  const { data, setData, post, patch, processing, errors, reset } = useForm({
    name: transactionData ? transactionData.name : "",
    accountId: transactionData ? transactionData.accountId : "",
    categoryId: transactionData ? transactionData.categoryId : "",
    transactionDate: transactionData
      ? configHelper.formatDate(transactionData.transactionDate)
      : "",
    amount: transactionData ? transactionData.amount : "",
    note: transactionData ? transactionData.note : "",
    transactionType: categoryType,
    is_recurring: transactionData ? transactionData.is_recurring : false,
    frequency: transactionData ? transactionData.frequency : false,
    next_due_date: transactionData ? transactionData.next_due_date : "",
    transactionId: transactionData ? transactionData.id : null,
  });

  const resetForm = () => {
    reset(
      "name",
      "accountId",
      "categoryId",
      "transactionDate",
      "amount",
      "note",
      "type",
      "is_recurring",
      "frequency",
      "next_due_date",
      "transactionId",
    );
    closeModal();
  };

  const nextDueDateHelper = (start_date, freq) => {
    const date = new Date(start_date);

    switch (freq) {
      case "daily":
        date.setDate(date.getDate() + 1);
        break;
      case "weekly":
        date.setDate(date.getDate() + 7);
        break;
      case "monthly":
        date.setMonth(date.getMonth() + 1);
        break;
      case "yearly":
        date.setFullYear(date.getFullYear() + 1);
        break;
    }

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (data.is_recurring) {
      const freq = data.frequency;
      const due_date = nextDueDateHelper(data.transactionDate, freq);
      setData("next_due_date", due_date);
    }
  }, [data.frequency, data.is_recurring]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionData) {
      patch(route("transaction.update", transactionData.id), {
        preserveScroll: true,
        onSuccess: resetForm,
      });
    } else {
      post(route("transaction.store"), {
        preserveScroll: true,
        onSuccess: resetForm,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-1">
      <div>
        <TextInput
          type="date"
          className="mt-2 block w-full"
          placeholder="tanggal"
          value={data.transactionDate}
          onChange={(e) => setData("transactionDate", e.target.value)}
        />
        <InputError message={errors.transactionDate} className="mt-2" />
      </div>
      <div>
        <SelectInput
          className="mt-2 block w-full"
          defaultValue={data.accountId}
          onChange={(e) => setData("accountId", e.target.value)}
        >
          <option value="" disabled>
            Pilih Akun
          </option>
          {accounts.map((acc, key) => (
            <option key={key} value={acc.id}>
              {acc.name}
            </option>
          ))}
        </SelectInput>
        <InputError message={errors.accountId} className="mt-2" />
      </div>
      <div>
        <TextInput
          placeholder="nama transaksi"
          className="mt-2 block w-full"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
        />
        <InputError message={errors.name} className="mt-2" />
      </div>
      <div>
        <TextInput
          type="number"
          placeholder="Rp. 0"
          className="mt-2 block w-full"
          value={data.amount}
          onChange={(e) => setData("amount", e.target.value)}
        />
        <InputError message={errors.amount} className="mt-2" />
      </div>
      <div>
        <SelectInput
          className="mt-2 block w-full"
          defaultValue={data.categoryId}
          onChange={(e) => setData("categoryId", e.target.value)}
        >
          <option value="" disabled>
            Pilih Kategori
          </option>
          {categories
            .filter((category) => category.type === categoryType)
            .map((data, key) => (
              <option key={key} value={data.id}>
                {data.name}
              </option>
            ))}
        </SelectInput>
        <InputError message={errors.categoryId} className="mt-2" />
      </div>
      <div>
        <TextInput
          placeholder="catatan"
          className="mt-2 block w-full"
          value={data.note}
          onChange={(e) => setData("note", e.target.value)}
        />
        <InputError message={errors.note} className="mt-2" />
      </div>
      <div className="flex items-center">
        <label className="flex items-center">
          <Checkbox
            className="mt-2"
            checked={data.is_recurring}
            onChange={(e) => setData("is_recurring", e.target.checked)}
          />
          <span className="ms-2 text-base-content">Transaksi berulang</span>
        </label>
        <div
          className="tooltip ml-1 text-base-content"
          data-tip="Transaksi terbuat secara otomatis pada tanggal berikutnya"
        >
          <CircleHelp size={18} />
        </div>
      </div>
      {data.transactionDate && data.is_recurring ? (
        <>
          <div>
            <SelectInput
              className="mt-2 block w-full"
              defaultValue={data.frequency}
              onChange={(e) => setData("frequency", e.target.value)}
            >
              <option value="">Pilih durasi</option>
              {frequencies.map((frequency, key) => (
                <option key={key} value={frequency.key}>
                  {frequency.value}
                </option>
              ))}
            </SelectInput>
            <InputError message={errors.categoryId} className="mt-2" />
          </div>
          <div>
            <InputLabel value={"Transaksi berikutnya:"} />
            <TextInput
              type="date"
              className={`mt-2 block w-full`}
              placeholder="tanggal"
              value={data.next_due_date}
              disabled
              onChange={(e) => setData("next_due_date", e.target.value)}
            />
            <InputError message={errors.next_due_date} className="mt-2" />
          </div>
        </>
      ) : (
        data.is_recurring == "1" && (
          <InputError
            message={"Pilih tanggal transaksi terlebih dahulu"}
            className="mt-2"
          />
        )
      )}
      <input type="hidden" value={data.transactionType} />
      {transactionData && <input type="hidden" value={data.transactionId} />}
      <div className="mt-2">
        <PrimaryButton
          className="btn-block"
          variant="neutral"
          disabled={processing}
        >
          {processing ? "Saving..." : "Save"}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default TransactionForm;
