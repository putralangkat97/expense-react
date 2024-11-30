import ConfigHelper from '@/Helpers/ConfigHelpers.js';
import CategoryIcon from '../Category/CategoryIcon';

const TransactionCard = ({ data, ...props }) => {
  const configHelper = new ConfigHelper();
  return (
    <div
      className={
        'card card-compact h-auto cursor-pointer border-x-2 border-b-4 border-t-2 ' +
        (data.transactionType === 'in'
          ? 'border-primary bg-success hover:bg-primary'
          : 'border-red-700 bg-error hover:bg-red-700')
      }
      {...props}
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={
                'rounded-full p-2 hover:text-base-100 ' +
                (data.transactionType === 'in'
                  ? 'bg-primary text-base-100'
                  : 'bg-red-700 text-base-100')
              }
            >
              <CategoryIcon category={data.category_name} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="tooltip font-bold" data-tip={data.name}>
                {data.name.length > 12
                  ? data.name.slice(0, 12) + '..'
                  : data.name}
              </div>
              <div className="text-sm text-neutral">{data.transactionDate}</div>
            </div>
          </div>
          <div>
            {data.transactionType === 'in' ? '' : '-'}
            {configHelper.formatCurrency(data.amount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
