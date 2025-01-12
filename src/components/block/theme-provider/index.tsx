import React, { useEffect } from "react";

export interface ThemeProvoderProps {
  primaryColor?: string;
  children?: React.ReactNode;
}

const ThemeProvider = ({
  primaryColor = document.documentElement.style.getPropertyValue(
    "--primary-color"
  ) || "#000",
  children,
}: ThemeProvoderProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);

  return <>{children}</>;
};

export default ThemeProvider;
