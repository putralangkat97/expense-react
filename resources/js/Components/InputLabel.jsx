export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return (
    <label {...props} className={`block text-base-content ` + className}>
      {value ? value : children}
    </label>
  );
}
