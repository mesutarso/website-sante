'use client'
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Link } from 'next-view-transitions'
import {
    NavigationMenu,
    navigationMenuTriggerStyle,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Logo from "@/components/shared/logo";
import { MENU } from "@/menu.config";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/header/nav/mobile-nav";
import { Goal } from "lucide-react";

export const Menu = ({ className }: any) => {
    const pathname = usePathname();

    const isActive = (item: { href: string, submenu?: { href: string }[] }) => {
        if (pathname === item.href) return true;
        if (item.submenu) {
            return item.submenu.some(subItem => pathname === subItem.href);
        }
        return false;
    };

    return (
        <nav
            className={cn(
                "sticky z-50 top-0 bg-background",
                "border-b",
                className,
            )}
        >
            <div
                id="nav-container"
                className="max-w-7xl mx-auto py-3 px-6 sm:px-8 flex justify-between items-center gap-3"
            >
                <Logo type="dark" />
                <div className="flex items-center gap-1">
                    <NavigationMenu className="hidden lg:flex space-x-4" >
                        <NavigationMenuList className='gap-1'>
                            {
                                MENU.map((item: { name: string, href: string, submenu?: { name: string, desc?: string, href: string }[] }, index: number) => {
                                    if (item.submenu) {
                                        return (
                                            <DropdownMenu key={index}>
                                                <DropdownMenuTrigger asChild>
                                                    <div className={cn(navigationMenuTriggerStyle(), "font-semibold flex items-center gap-1 uppercase text-sm cursor-pointer", isActive(item) && "text-white bg-blue")}>
                                                        {item.name}
                                                        <ChevronDown className="h-4 w-4" />
                                                    </div>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start" className="p-2 grid grid-cols-2 items-center gap-2">
                                                    {
                                                        item.submenu.map((subItem: any, index: number) => (
                                                            <DropdownMenuItem key={index} asChild>
                                                                <Link href={subItem.href} className="flex items-center gap-2">
                                                                    <Goal className="w-4 h-4" />
                                                                    <span className="text-sm">{subItem.name}</span>
                                                                </Link>
                                                            </DropdownMenuItem>
                                                        ))
                                                    }
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )
                                    } else {
                                        return (
                                            <NavigationMenuItem key={index} >
                                                <Link href={item.href} >
                                                    <span className={cn(
                                                        navigationMenuTriggerStyle(), 
                                                        "font-semibold uppercase text-sm", 
                                                        isActive(item) && "text-white bg-blue",
                                                        item.name === "Épidemiologie" && "border-1 border-red-500 bg-red-500"
                                                    )}>
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            </NavigationMenuItem>)
                                    }
                                })
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <MobileNav />
                </div>
            </div>
        </nav>
    );
};