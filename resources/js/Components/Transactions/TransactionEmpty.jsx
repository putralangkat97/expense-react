const TransactionEmpty = ({ ...props }) => {
  return (
    <div
      className={
        'card card-compact h-20 w-full cursor-pointer border-2 border-dashed border-primary bg-base-200'
      }
      {...props}
    >
      <div className="card-body flex items-center justify-center">
        <div className="text-lg font-normal text-neutral-500">
          No Transaction.
        </div>
      </div>
    </div>
  );
};

export default TransactionEmpty;
