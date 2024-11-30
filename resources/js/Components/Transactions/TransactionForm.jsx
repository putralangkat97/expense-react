import ConfigHelper from '@/Helpers/ConfigHelpers.js';
import { useForm } from '@inertiajs/react';
import InputError from '../InputError';
import PrimaryButton from '../PrimaryButton';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';

const TransactionForm = ({
  accounts,
  categories,
  categoryType,
  transactionData = null,
  closeModal,
}) => {
  const configHelper = new ConfigHelper();
  const { data, setData, post, patch, processing, errors, reset } = useForm({
    name: transactionData ? transactionData.name : '',
    accountId: transactionData ? transactionData.accountId : '',
    categoryId: transactionData ? transactionData.categoryId : '',
    transactionDate: transactionData
      ? configHelper.formatDate(transactionData.transactionDate)
      : '',
    amount: transactionData ? transactionData.amount : '',
    note: transactionData ? transactionData.note : '',
    transactionType: categoryType,
    transactionId: transactionData ? transactionData.id : null,
  });

  const resetForm = () => {
    reset(
      'name',
      'accountId',
      'categoryId',
      'transactionDate',
      'amount',
      'note',
      'type',
      'transactionId',
    );
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionData) {
      patch(route('transaction.update', transactionData.id), {
        preserveScroll: true,
        onFinish: resetForm,
      });
    } else {
      post(route('transaction.store'), {
        preserveScroll: true,
        onFinish: resetForm,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-1">
      <div>
        <SelectInput
          className="mt-1 block w-full"
          defaultValue={data.accountId}
          onChange={(e) => setData('accountId', e.target.value)}
        >
          <option value="" disabled>
            Choose Account
          </option>
          {accounts.map((acc, key) => (
            <option key={key} value={acc.id}>
              {acc.name}
            </option>
          ))}
        </SelectInput>
        <InputError message={errors.accountId} className="mt-1" />
      </div>
      <div>
        <TextInput
          placeholder="transaction name"
          className="mt-1 block w-full"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
        />
        <InputError message={errors.name} className="mt-1" />
      </div>
      <div>
        <TextInput
          type="date"
          placeholder="transaction date"
          className="mt-1 block w-full"
          value={data.transactionDate}
          onChange={(e) => setData('transactionDate', e.target.value)}
        />
        <InputError message={errors.transactionDate} className="mt-1" />
      </div>
      <div>
        <TextInput
          type="number"
          placeholder="Rp. 0"
          className="mt-1 block w-full"
          value={data.amount}
          onChange={(e) => setData('amount', e.target.value)}
        />
        <InputError message={errors.amount} className="mt-1" />
      </div>
      <div>
        <SelectInput
          className="mt-1 block w-full"
          defaultValue={data.categoryId}
          onChange={(e) => setData('categoryId', e.target.value)}
        >
          <option value="" disabled>
            Category
          </option>
          {categories
            .filter((category) => category.type === categoryType)
            .map((data, key) => (
              <option key={key} value={data.id}>
                {data.name}
              </option>
            ))}
        </SelectInput>
        <InputError message={errors.categoryId} className="mt-1" />
      </div>
      <div>
        <TextInput
          placeholder="note"
          className="mt-1 block w-full"
          value={data.note}
          onChange={(e) => setData('note', e.target.value)}
        />
        <InputError message={errors.note} className="mt-1" />
      </div>
      <input type="hidden" value={data.transactionType} />
      {transactionData && <input type="hidden" value={data.transactionId} />}
      <div className="mt-2">
        <PrimaryButton className="btn-block" disabled={processing}>
          {processing ? 'Saving...' : 'Save'}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default TransactionForm;
