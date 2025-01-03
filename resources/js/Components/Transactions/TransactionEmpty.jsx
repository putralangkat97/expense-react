const TransactionEmpty = ({ ...props }) => {
  return (
    <div
      className={
        'card card-compact h-20 w-full border-2 border-dashed border-neutral bg-base-200'
      }
      {...props}
    >
      <div className="card-body flex items-center justify-center">
        <div className="text-lg font-normal text-neutral-500">
          Tidak ada transaksi.
        </div>
      </div>
    </div>
  );
};

export default TransactionEmpty;
