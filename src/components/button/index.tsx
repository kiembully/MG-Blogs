import { FC, ReactNode } from "react";
import cn from "classnames";

type Props = {
  children: ReactNode;
  variant?: "default" | "ghost" | "outlined";
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
  const renderButtonStyle = (val:string) => {
    switch (val) {
      case "ghost": {
        return "text-indigo-500 active:text-indigo-700 active:border-b-2 border-indigo-400"
      }
      case "outlined": {
        return "p-2 rounded-md border text-indigo-500 active:text-indigo-700 active:border-b-2 border-indigo-500"
      }
      default: {
        return "p-2 rounded-md bg-indigo-500 active:bg-indigo-700 text-white"
      }
    }
  }

  return (
    <button
      type="button"
      className={cn(
        `cursor-pointer text-${size}`,
        renderButtonStyle(variant),
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
