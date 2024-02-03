import { FC, ReactNode } from "react";
import cn from "classnames";

type Props = {
  children: ReactNode;
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg";
  classNames?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  children,
  variant = "default",
  size = "md",
  classNames,
  fullWidth,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={cn(
        `cursor-pointer text-${size}`,
        variant === "default"
          ? "p-2 rounded-md bg-indigo-500 active:bg-indigo-700 text-white"
          : "text-indigo-500 active:text-indigo-700",
        classNames,
        fullWidth ? "w-full" : "w-max"
      )}
      disabled
    >
      {children}
    </button>
  );
};

export default Button;
