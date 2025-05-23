const AccountEmpty = ({ triggerModal, title = "Add Account" }) => {
  return (
    <button
      className="card card-sm sm:card-md mx-auto h-40 w-full border-2 border-dashed border-neutral bg-base-300"
      onClick={() => triggerModal("Create Account", null, "account-create")}
    >
      <div className="card-body flex flex-row items-center justify-center">
        <div className="text-lg font-normal text-neutral-500">{title}</div>
      </div>
    </button>
  );
};

export default AccountEmpty;
