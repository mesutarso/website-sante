"use client";


import {
  useState,
} from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Menu, Navigation } from "lucide-react";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { MENU } from "@/menu.config";
import cn from "clsx";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 border w-10 focus:outline-none text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu />

        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 w-[80vw]">
        <Logo type="dark" />
        <ScrollArea className="my-8 h-[calc(100vh-8rem)] pb-10 pl-6">
          <NavigationMenu >
            <NavigationMenuList className="space-y-2 flex-col justify-start items-start">
              {MENU.map((item: any, index: number) => (
                item.submenu ? (
                  <NavigationMenuItem key={index}>
                    <Accordion type="single" collapsible >
                      <AccordionItem value={item.name} className="underline-none">
                        <AccordionTrigger className={cn(navigationMenuTriggerStyle(), "!hover:underline-none underline-none")}>
                          <span>{item.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 border-none">
                          <ul>
                            {item.submenu.map((subItem: any, index: number) => (
                              <li key={index}>
                                <Link href={subItem.href} legacyBehavior passHref>
                                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {subItem.name}
                                  </NavigationMenuLink>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>

          </NavigationMenu>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}


