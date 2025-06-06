/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useController, UseControllerProps } from "react-hook-form";

interface CustomInputProps extends UseControllerProps<any> {
  label: string;
  placeholder: string;
  className?: string;
}

export const CustomInput = ({
  label,
  placeholder,
  className,
  ...controllerProps
}: CustomInputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(controllerProps);

  return (
    <FormItem className="w-full">
      <FormLabel className="text-[#51596c] ">{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          className={cn(
            "h-[52px] px-7 focus-visible:ring-[#e5e5e5] focus-visible:ring-offset-[#e5e5e5] placeholder:opacity-60 focus:border-none focus-visible:border-none ",
            className
          )}
          {...field}
        />
      </FormControl>
      {error && <FormMessage>{error.message}</FormMessage>}
    </FormItem>
  );
};
