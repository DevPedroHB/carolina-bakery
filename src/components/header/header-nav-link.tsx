import { cn } from "cn";
import Link from "next/link";
import type { ComponentProps } from "react";

export function HeaderNavLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "w-fit font-medium text-sm uppercase transition-all",
        "hover:underline hover:underline-offset-8 hover:text-primary",
        className,
      )}
      {...props}
    />
  );
}
