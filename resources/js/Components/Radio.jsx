export default function Radio({ className = "", ...props }) {
  return (
    <input
      {...props}
      type="radio"
      className={"radio radio-primary " + className}
    />
  );
}
