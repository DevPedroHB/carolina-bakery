"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export function HeaderNavLink({
  className,
  href,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const hrefPathname = typeof href === "string" ? href : href.pathname;
  const isActive = pathname === hrefPathname;

  return (
    <Link
      href={href}
      data-active={isActive}
      className={cn(
        "w-fit font-medium text-sm uppercase transition-all",
        "hover:text-primary hover:underline hover:underline-offset-8",
        "data-[active=true]:text-primary data-[active=true]:underline data-[active=true]:underline-offset-8",
        className,
      )}
      {...props}
    />
  );
}
