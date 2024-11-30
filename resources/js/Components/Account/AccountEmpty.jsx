const AccountEmpty = ({ triggerModal }) => {
  return (
    <button
      className="btn card card-compact mx-auto h-40 w-full border-2 border-dashed border-primary bg-base-200"
      onClick={() => triggerModal('Create Account', null, 'account-create')}
    >
      <div className="card-body flex flex-row items-center justify-center">
        <div className="text-lg font-normal text-neutral-500">Add account</div>
      </div>
    </button>
  );
};

export default AccountEmpty;
