import ConfigHelper from '@/Helpers/ConfigHelpers.js';
import { Pencil } from 'lucide-react';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';

const AccountDetail = ({ data, triggerModal }) => {
  const configHelper = new ConfigHelper();
  return (
    <div className="grid grid-cols-1 gap-2">
      <div>
        <InputLabel
          value={'Transaction Name'}
          className="text-sm font-medium sm:text-lg"
        />
        <h2 className="-mt-1 text-neutral">{data.name}</h2>
      </div>
      <div>
        <InputLabel
          value={'Transaction Date'}
          className="text-sm font-medium sm:text-lg"
        />
        <h2 className="-mt-1 text-neutral">
          {configHelper.formatCurrency(data.balance)}
        </h2>
      </div>
      <div className="col-span-2 mt-4">
        <PrimaryButton
          type="button"
          className="btn-block"
          variant="info"
          size="sm"
          onClick={() =>
            triggerModal('Edit Account', data, 'account-edit', true)
          }
        >
          <Pencil size={16} />
          Edit
        </PrimaryButton>
        {/* <SecondaryButton
          type="button"
          variant="error"
          className="btn-block mt-2"
          size="sm"
        >
          <Trash size={16} />
          Delete
        </SecondaryButton> */}
      </div>
    </div>
  );
};

export default AccountDetail;
