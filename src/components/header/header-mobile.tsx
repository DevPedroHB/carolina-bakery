"use client";

import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "cn";
import type { ComponentProps } from "react";
import { useBoolean } from "#/hooks/use-boolean";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { HeaderNavLink } from "./header-nav-link";

export function HeaderMobile({
  className,
  ...props
}: ComponentProps<typeof SheetTrigger>) {
  const [open, { set, off }] = useBoolean();

  return (
    <Sheet open={open} onOpenChange={set}>
      <SheetTrigger
        render={
          <Button variant="outline" size="icon">
            <HugeiconsIcon icon={Menu01Icon} />
          </Button>
        }
        className={cn("md:hidden", className)}
        {...props}
      />
      <SheetContent className="p-8">
        <HeaderNavLink href="/" onClick={off}>
          Início
        </HeaderNavLink>
        <HeaderNavLink
          href={{ pathname: "/", hash: "hero-about-us" }}
          onClick={off}
        >
          Sobre nós
        </HeaderNavLink>
        <HeaderNavLink
          href={{ pathname: "/", hash: "hero-products" }}
          onClick={off}
        >
          Produtos
        </HeaderNavLink>
        <HeaderNavLink
          href={{ pathname: "/", hash: "hero-menu" }}
          onClick={off}
        >
          Cardapio
        </HeaderNavLink>
        <HeaderNavLink
          href={{ pathname: "/", hash: "hero-contact" }}
          onClick={off}
        >
          Contato
        </HeaderNavLink>
      </SheetContent>
    </Sheet>
  );
}
