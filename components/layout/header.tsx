import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background">
      <Container
        size="default"
        className="flex h-16 items-center justify-between gap-4 lg:h-20"
      >
        <Link
          href="/"
          className="shrink-0"
          aria-label="Lotus Vitaal — naar de homepage"
        >
          <Wordmark />
        </Link>

        <PrimaryNav className="hidden lg:flex" />

        <div className="hidden items-center gap-2 lg:flex">
          <Button render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        </div>

        <MobileNav className="lg:hidden" />
      </Container>
    </header>
  );
}

export { Header };
