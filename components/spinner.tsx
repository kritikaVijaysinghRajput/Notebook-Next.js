import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Spinner = ({ size }: VariantProps<typeof spinnerVariants>) => {
  return <Loader className={cn(spinnerVariants({ size }))} />;
};
