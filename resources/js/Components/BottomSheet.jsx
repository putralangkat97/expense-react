import { X } from 'lucide-react';

const BottomSheet = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <dialog
      className={`modal modal-bottom md:modal-middle ${isOpen ? 'modal-open' : ''}`}
      open={isOpen}
    >
      <div className="modal-box mx-auto max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button className={`btn btn-circle btn-sm`} onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="py-2">{children}</div>
      </div>
    </dialog>
  );
};

export default BottomSheet;
