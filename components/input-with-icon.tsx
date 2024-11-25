import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

type InputWithIconProps = React.ComponentPropsWithoutRef<"input"> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const InputWithIcon = React.forwardRef<
  React.ElementRef<"input">,
  InputWithIconProps
>(
  (
    { className, type, startIcon: StartIcon, endIcon: EndIcon, ...props },
    ref
  ) => {
    return (
      <div className="w-full relative flex items-center">
        {StartIcon && (
          <div className="absolute left-3 text-center transition-all disabled:pointer-events-none opacity-50">
            {StartIcon}
          </div>
        )}
        <Input
          type={type}
          className={cn(
            "h-[52px] px-7 placeholder:opacity-60 focus-visible:border-none focus-visible:ring-[#e5e5e5] focus-visible:ring-offset-[#e5e5e5] ",
            StartIcon && "pl-10",
            EndIcon && "pr-9",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 text-center transition-all disabled:pointer-events-none disabled:opacity-50">
            {EndIcon}
          </div>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
