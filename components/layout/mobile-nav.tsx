"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Wordmark } from "@/components/brand/wordmark";
import { primaryNavLinks, zorgNavLinks } from "@/lib/nav-items";

function MobileNav({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" />}>
          <MenuIcon aria-hidden="true" />
          <span className="sr-only">Menu openen</span>
        </SheetTrigger>
        <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
          <SheetHeader className="border-b border-border">
            <SheetTitle>
              <Wordmark />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigatiemenu
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            <span className="px-2 pt-2 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Zorg
            </span>
            {zorgNavLinks.map((item) => (
              <SheetClose
                key={item.href}
                render={<Link href={item.href} />}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </SheetClose>
            ))}
            <div className="my-2 border-t border-border" />
            {primaryNavLinks.map((item) => (
              <SheetClose
                key={item.href}
                render={<Link href={item.href} />}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </SheetClose>
            ))}
          </nav>
          <div className="mt-auto border-t border-border p-4">
            <SheetClose
              render={<Link href="/kennismaken" />}
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              Plan een kennismaking
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { MobileNav };
