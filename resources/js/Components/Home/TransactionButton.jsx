import { Send } from 'lucide-react';

const TransactionButton = ({ triggerModal }) => {
  return (
    <div className="flex justify-start space-x-4" id="trx">
      <div className="flex flex-col items-center">
        <button
          className="btn btn-error rounded-full border-x-2 border-b-4 border-t-2 border-red-700 p-2 text-red-700 hover:border-red-700 hover:text-red-700"
          type="button"
          onClick={() => triggerModal('Buat Pengeluaran', null, 'transaction-out')}
        >
          <Send size={28} />
        </button>
        <div className='text-xs mt-1'>Pengeluaran</div>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-success rounded-full border-x-2 border-b-4 border-t-2 border-green-700 p-2 text-green-700 hover:border-green-700 hover:text-green-700"
          type="button"
          onClick={() => triggerModal('Buat Pemasukan', null, 'transaction-in')}
        >
          <Send size={28} className="rotate-180" />
        </button>
        <div className='text-xs mt-1'>Pemasukan</div>
      </div>
    </div>
  );
};

export default TransactionButton;
