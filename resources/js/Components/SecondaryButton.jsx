export default function SecondaryButton({
  className = '',
  disabled,
  children,
  size = 'md',
  variant = 'default',
  ...props
}) {
  let btnSize = size;
  switch (size) {
    case 'sm':
      btnSize = 'btn-sm';
      break;
    case 'lg':
      btnSize = 'btn-lg';
      break;
    default:
      btnSize = 'btn-md';
      break;
  }

  let btnVariant = variant;
  switch (variant) {
    case 'success':
      btnVariant =
        'bg-success border-green-700 hover:bg-green-700 hover:text-white hover:border-green-700';
      break;
    case 'info':
      btnVariant =
        'bg-info border-sky-700 hover:bg-sky-700 hover:text-white hover:border-sky-700';
      break;
    case 'error':
      btnVariant =
        'bg-error border-red-700 hover:bg-red-700 hover:text-white hover:border-red-700';
      break;
    case 'warning':
      btnVariant =
        'bg-warning border-amber-700 hover:bg-amber-700 hover:text-white hover:border-amber-700';
      break;
    default:
      btnVariant = 'bg-transparent border-primary';
      break;
  }

  return (
    <button
      {...props}
      className={
        `btn border-x-2 border-b-4 border-t-2 ${btnVariant} ${disabled && 'opacity-25'} ${btnSize} ` +
        className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
