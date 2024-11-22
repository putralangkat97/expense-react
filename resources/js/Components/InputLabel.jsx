export default function InputLabel({
  value,
  className = '',
  children,
  ...props
}) {
  return (
    <label
      {...props}
      className={`block text-neutral ` + className}
    >
      {value ? value : children}
    </label>
  );
}
