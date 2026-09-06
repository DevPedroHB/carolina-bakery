import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { HeaderMobile } from "./header-mobile";
import { HeaderNavLink } from "./header-nav-link";

export function Header() {
  return (
    <header className="top-0 z-50 sticky bg-card w-full h-16">
      <nav className="flex justify-between items-center gap-4 mx-auto px-4 w-full max-w-7xl h-full">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Padaria Carolina"
            width={795}
            height={314}
            className="w-32"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <HeaderNavLink href="/">Início</HeaderNavLink>
          <HeaderNavLink href={{ pathname: "/", hash: "hero-about-us" }}>
            Sobre nós
          </HeaderNavLink>
          <HeaderNavLink href={{ pathname: "/", hash: "hero-products" }}>
            Produtos
          </HeaderNavLink>
          <HeaderNavLink href={{ pathname: "/", hash: "hero-menu" }}>
            Cardapio
          </HeaderNavLink>
          <HeaderNavLink href={{ pathname: "/", hash: "hero-contact" }}>
            Contato
          </HeaderNavLink>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
            Faça Seu Pedido
          </Button>
          <HeaderMobile />
        </div>
      </nav>
    </header>
  );
}
