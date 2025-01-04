import { LoaderCircle } from "lucide-react";

export default function PrimaryButton({
  className = "",
  disabled,
  children,
  variant = "default",
  size = "md",
  ...props
}) {
  let btnSize = size;
  switch (size) {
    case "sm":
      btnSize = "btn-sm";
      break;
    case "lg":
      btnSize = "btn-lg";
      break;
    default:
      btnSize = "btn-md";
      break;
  }

  let btnVariant = variant;
  switch (variant) {
    case "success":
      btnVariant =
        "bg-success border-green-700 hover:bg-green-700 hover:text-white hover:border-green-700";
      break;
    case "info":
      btnVariant =
        "bg-info text-white border-info hover:bg-info hover:text-white hover:border-info";
      break;
    case "error":
      btnVariant =
        "bg-error border-red-700 hover:bg-red-700 hover:text-white hover:border-red-700";
      break;
    case "warning":
      btnVariant =
        "bg-warning border-amber-700 hover:bg-amber-700 hover:text-white hover:border-amber-700";
      break;
    case "neutral":
      btnVariant =
        "bg-base-200 border-base-300 hover:bg-base-300 text-base-content hover:border-base-300";
      break;
    default:
      btnVariant =
        "bg-primary/80 border-primary hover:bg-primary hover:border-primary";
      break;
  }

  return (
    <button
      {...props}
      className={
        `btn border-2 ${btnVariant} ${disabled && "disabled"} ${btnSize} ` +
        className
      }
      disabled={disabled}
    >
      {children}
      {disabled && <LoaderCircle size={20} className="animate-spin" />}
    </button>
  );
}
