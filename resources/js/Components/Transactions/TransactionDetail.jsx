import ConfigHelper from '@/Helpers/ConfigHelpers';
import { Pencil, Trash } from 'lucide-react';
import CategoryIcon from '../Category/CategoryIcon';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

const TransactionDetail = ({ data, triggerModal }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="grid grid-cols-1 gap-2">
      <div>
        <InputLabel
          value={'Transaction Name'}
          className="text-sm font-medium sm:text-lg"
        />
        <h2 className="-mt-1 text-gray-600">{data.name}</h2>
      </div>
      <div>
        <InputLabel
          value={'Transaction Date'}
          className="text-sm font-medium sm:text-lg"
        />
        <h2 className="-mt-1 text-gray-600">{data.transactionDate}</h2>
      </div>
      <div>
        <InputLabel
          value={'Category'}
          className="text-sm font-medium sm:text-lg"
        />
        <div className="-mt-1 flex items-center space-x-1 text-gray-600">
          <div>
            <CategoryIcon category={data.category_name} size={18} />
          </div>
          <div className="">{data.category_name}</div>
        </div>
      </div>
      <div>
        <InputLabel
          value={'Amount'}
          className="text-sm font-medium sm:text-lg"
        />
        <h2 className="-mt-1 text-gray-600">
          {data.transactionType === 'in' ? '' : '-'}
          {configHelper.formatCurrency(data.amount)}
        </h2>
      </div>
      <div className="col-span-2 mt-4">
        <PrimaryButton
          type="button"
          className="btn-block"
          variant="info"
          size="sm"
          onClick={() =>
            triggerModal(
              'Edit Transaction',
              data,
              `transaction-${data.transactionType}`,
              true,
            )
          }
        >
          <Pencil size={16} />
          Edit
        </PrimaryButton>
        <SecondaryButton
          type="button"
          variant="error"
          className="btn-block mt-2"
          size="sm"
        >
          <Trash size={16} />
          Delete
        </SecondaryButton>
      </div>
    </div>
  );
};

export default TransactionDetail;
