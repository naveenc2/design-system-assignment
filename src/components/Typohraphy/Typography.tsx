import React from "react";
import clsx from "clsx";

type TypographyVariant = "h1" | "h2" | "h3" | "p" | "span" | "label";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: TypographyVariant;
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  p: "text-base",
  span: "text-sm",
  label: "text-sm font-medium text-gray-700",
};

export const Typography: React.FC<TypographyProps> = ({
  as = "p",
  variant = "p",
  className = "",
  children,
  ...props
}) => {
  const Component = as;

  return React.createElement(
    Component,
    {
      className: clsx(variantClasses[variant], className),
      ...props,
    },
    children
  );
};
