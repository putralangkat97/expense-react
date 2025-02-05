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
      btnVariant = "btn-success";
      break;
    case "info":
      btnVariant = "btn-info";
      break;
    case "error":
      btnVariant = "btn-error";
      break;
    case "warning":
      btnVariant = "btn-warning";
      break;
    case "neutral":
      btnVariant = "btn-neutral";
      break;
    case "default":
      btnVariant = "";
      break;
    default:
      btnVariant = "btn-primary";
      break;
  }

  return (
    <button
      {...props}
      className={
        `btn ${btnVariant} ${disabled && "disabled"} ${btnSize} ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
