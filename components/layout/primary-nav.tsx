"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { primaryNavLinks, zorgNavLinks } from "@/lib/nav-items";

function PrimaryNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Zorg</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-88 gap-1 p-2">
              {zorgNavLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    active={pathname === item.href}
                    className="flex-col items-start gap-0.5"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                    {item.description ? (
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    ) : null}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {primaryNavLinks.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              render={<Link href={item.href} />}
              active={pathname === item.href}
              className={navigationMenuTriggerStyle()}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { PrimaryNav };
