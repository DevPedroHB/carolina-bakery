import {
  Restaurant02Icon,
  RestaurantIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "#/components/ui/button";

export function Hero() {
  return (
    <section
      id="home-hero"
      className="relative bg-[url('/images/hero.webp')] bg-cover bg-no-repeat bg-center min-h-svh"
    >
      <div className="top-[85%] left-[42.25%] absolute flex gap-4">
        <Button variant="default" size="lg">
          <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
          Faça seu pedido
        </Button>
        <Button variant="secondary" size="lg">
          <HugeiconsIcon icon={RestaurantIcon} className="size-5" />
          Ver cardápio
          <HugeiconsIcon icon={Restaurant02Icon} className="size-5" />
        </Button>
      </div>
    </section>
  );
}
