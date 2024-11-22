import { Send } from 'lucide-react';

const TransactionButton = ({ triggerModal }) => {
  return (
    <div className="flex justify-start space-x-4">
      <div className="flex flex-col items-center">
        <button
          className="btn btn-error rounded-full border-x-2 border-b-4 border-t-2 border-red-700 p-2 text-red-700 hover:border-red-700 hover:text-red-700"
          type="button"
          onClick={() => triggerModal('Create Spend', null, 'transaction-out')}
        >
          <Send size={28} />
        </button>
        <div>Spend</div>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-success rounded-full border-x-2 border-b-4 border-t-2 border-green-700 p-2 text-green-700 hover:border-green-700 hover:text-green-700"
          type="button"
          onClick={() => triggerModal('Create Income', null, 'transaction-in')}
        >
          <Send size={28} className="rotate-180" />
        </button>
        <div>Receive</div>
      </div>
    </div>
  );
};

export default TransactionButton;
