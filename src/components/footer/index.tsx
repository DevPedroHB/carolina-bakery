import {
  Clock01Icon,
  Facebook01Icon,
  InstagramIcon,
  MapPinnedIcon,
  PhoneCallIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "../ui/button";
import { FooterCopyright } from "./footer-copyright";

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 py-8 md:divide-x md:divide-primary">
          <div className="flex flex-col justify-center items-center md:items-start px-6 md:text-left text-center">
            <Image
              src="/images/logo.webp"
              alt="Carolina Pães e Doces"
              width={150}
              height={70}
              className="mb-2 w-37.5 h-auto object-contain"
            />
            <p className="text-sm leading-5">
              Sabor que acolhe,
              <br />
              qualidade que você confia!
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://www.instagram.com/carolinapaesedocesoficial"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <HugeiconsIcon
                  icon={InstagramIcon}
                  className="size-5"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="https://www.facebook.com/CarolinaPaesEDoces"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <HugeiconsIcon
                  icon={Facebook01Icon}
                  className="size-5"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="https://wa.me/551141835899"
                aria-label="WhatsApp"
                className="hover:text-primary transition-colors"
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  className="size-5"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 md:mt-0 px-6 pt-8 md:pt-0">
            <h3 className="mb-4 font-bold text-sm uppercase tracking-wide">
              Faça seu pedido!
            </h3>
            <div className="space-y-3">
              <Link
                href="tel:+551141835899"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="flex justify-center items-center bg-primary rounded-full size-7 shrink-0">
                  <HugeiconsIcon
                    icon={PhoneCallIcon}
                    className="fill-card size-4 text-card"
                  />
                </span>
                <span className="font-semibold text-lg">(11) 4183-5899</span>
              </Link>
              <Link
                href="tel:+551141845677"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="flex justify-center items-center bg-primary rounded-full size-7 shrink-0">
                  <HugeiconsIcon
                    icon={PhoneCallIcon}
                    className="fill-card size-4 text-card"
                  />
                </span>
                <span className="font-semibold text-lg">(11) 4184-5677</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 md:mt-0 px-6 pt-8 md:pt-0">
            <div className="flex gap-4">
              <HugeiconsIcon
                icon={Clock01Icon}
                className="mt-0.5 size-8 text-primary shrink-0"
              />
              <div>
                <h3 className="mb-2 font-bold text-sm uppercase tracking-wide">
                  Horário de funcionamento
                </h3>
                <p className="text-sm leading-6">
                  Das 16h às 21h30
                  <br />
                  Todos os dias
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 md:mt-0 px-6 pt-8 md:pt-0">
            <div className="flex gap-4">
              <HugeiconsIcon
                icon={MapPinnedIcon}
                className="mt-0.5 size-8 text-primary shrink-0"
              />
              <div>
                <h3 className="mb-2 font-bold text-sm uppercase tracking-wide">
                  Onde estamos
                </h3>
                <p className="mb-2 text-sm leading-5">
                  Rua Andaraí, 1442
                  <br />
                  Carapicuíba - SP
                  <br />
                  CEP: 06330-110
                </p>
                <Button size="sm">Ver no mapa</Button>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<p>Carregando...</p>}>
          <FooterCopyright />
        </Suspense>
      </div>
    </footer>
  );
}
