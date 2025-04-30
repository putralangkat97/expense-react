import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function ThemeHandler({ children }) {
  const { auth } = usePage().props;

  useEffect(() => {
    const userTheme = auth?.user?.themes || "light";
    document.documentElement.setAttribute("data-theme", userTheme);
  }, [auth?.user?.themes]);

  return children;
}
