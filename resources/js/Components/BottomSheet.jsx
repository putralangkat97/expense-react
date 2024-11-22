import { X } from 'lucide-react';

const BottomSheet = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'modal-bottom',
  type = 'ghost',
}) => {
  // Determine button class based on type
  const buttonClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
  }[type];
  return (
    <dialog
      className={`modal ${position} ${isOpen ? 'modal-open' : ''}`}
      open={isOpen}
    >
      <div className="modal-box mx-auto max-w-md">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            className={`btn btn-circle btn-sm ${buttonClass}`}
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="py-2">{children}</div>
      </div>
    </dialog>
  );
};

export default BottomSheet;
