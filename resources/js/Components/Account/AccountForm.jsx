import { useForm } from "@inertiajs/react";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";

const AccountForm = ({ accountData = null, closeModal }) => {
  const { data, setData, post, patch, processing, errors, reset } = useForm({
    name: accountData ? accountData.name : "",
    balance: accountData ? accountData.balance : "",
    accountId: accountData ? accountData.id : null,
  });

  const resetForm = () => {
    reset("name", "balance", "accountId");
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountData) {
      patch(route("account.update", accountData.id), {
        preserveScroll: true,
        onSuccess: resetForm,
      });
    } else {
      post(route("account.store"), {
        preserveScroll: true,
        onSuccess: resetForm,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-1">
      <div>
        <TextInput
          placeholder="account name"
          className="mt-1 block w-full"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
        />
        <InputError message={errors.name} className="mt-1" />
      </div>
      <div>
        <TextInput
          type="number"
          placeholder="Rp. 0"
          className="mt-1 block w-full"
          value={data.balance}
          onChange={(e) => setData("balance", e.target.value)}
        />
        <InputError message={errors.balance} className="mt-1" />
      </div>
      {accountData && <input type="hidden" value={data.accountId} />}
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

export default AccountForm;
