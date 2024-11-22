export default function Checkbox({ className = '', ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        'checkbox border border-gray-300 bg-base-200 ' +
        className
      }
    />
  );
}
