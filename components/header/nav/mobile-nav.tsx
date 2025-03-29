"use client";
import { useState } from "react";
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
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
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MENU } from "@/menu.config";
import cn from "clsx";

interface MenuItemProps {
    item: any;
    index: number;
    pathname: string;
    onClose: () => void;
}

const MenuItem = ({ item, index, pathname, onClose }: MenuItemProps) => {
    const isActive = (item: { href: string, submenu?: { href: string }[] }) => {
        if (pathname === item.href) return true;
        if (item.submenu) {
            return item.submenu.some(subItem => pathname === subItem.href);
        }
        return false;
    };
    if (item.submenu) {
        return (
            <NavigationMenuItem key={index}>
                <Accordion type="single" collapsible >
                    <AccordionItem value={item.name} className="!underline-none">
                        <AccordionTrigger className={cn("!hover:underline-none underline-none", isActive(item) && "bg-blue text-white", navigationMenuTriggerStyle())}>
                            <span>{item.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 border-none">
                            <ul>
                                {item.submenu.map((subItem: any, subIndex: number) => {
                                    const isSubItemActive = pathname === subItem.href;
                                    return (
                                        <li key={subIndex} onClick={onClose}>
                                            <Link href={subItem.href} className="underline-none" >
                                                <p className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    isSubItemActive && "text-primary font-medium"
                                                )}>
                                                    {subItem.name}
                                                </p>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={index}>
            <Link href={item.href} >
                <span className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(item) && "bg-blue text-white"
                )}>
                    {item.name}
                </span>
            </Link>
        </NavigationMenuItem>
    );
};

interface MobileMenuContentProps {
    onClose: () => void;
}

const MobileMenuContent = ({ onClose }: MobileMenuContentProps) => {
    const pathname = usePathname();

    return (
        <ScrollArea className="my-8 h-[calc(100vh-8rem)] pb-10 pl-6">
            <NavigationMenu>
                <NavigationMenuList className="space-y-2 flex-col justify-start items-start">
                    {MENU.map((item: any, index: number) => (
                        <MenuItem key={index} item={item} index={index} pathname={pathname} onClose={onClose} />
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </ScrollArea>
    );
};

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
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 w-[80vw]">
                <Logo type="dark" />
                <MobileMenuContent onClose={() => setOpen(false)} />
            </SheetContent>
        </Sheet>
    );
}


