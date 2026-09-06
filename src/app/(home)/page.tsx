import { AboutUs } from "./_components/about-us";
import { BannerCta } from "./_components/banner-cta";
import { Hero } from "./_components/hero";
import { Products } from "./_components/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Products />
      <BannerCta />
    </main>
  );
}
