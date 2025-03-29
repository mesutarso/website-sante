'use client'
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Link } from 'next-view-transitions'
import {
    NavigationMenu,
    navigationMenuTriggerStyle,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Logo from "@/components/shared/logo";
import { MENU } from "@/menu.config";
import { ChevronDown, ChevronUp } from "lucide-react";

import { MobileNav } from "@/components/header/nav/mobile-nav";

import { Goal } from "lucide-react";

export const Menu = ({ className, children, id }: any) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen((open) => !open);

    return (
        <nav
            className={cn(
                "sticky z-50 top-0 bg-background",
                "border-b",
                className,
            )}
            id={id}
        >
            <div
                id="nav-container"
                className="max-w-7xl mx-auto py-3 px-6 sm:px-8 flex justify-between items-center gap-3"
            >
                <Logo type="dark" />
                {children}
                <div className="flex items-center gap-1">
                    <NavigationMenu className="hidden lg:flex" >
                        <NavigationMenuList className='gap-1'>
                            {
                                MENU.map((item: { name: string, href: string, submenu?: { name: string, desc?: string, href: string }[] }, index: number) => {
                                    if (item.submenu) {
                                        return (
                                            <DropdownMenu key={index}>
                                                <DropdownMenuTrigger className={'focus:outline-none'}>
                                                    <NavigationMenuItem>
                                                        <div className={cn(navigationMenuTriggerStyle(), "font-semibold flex items-center gap-1 uppercase text-sm")} onClick={handleToggle}>
                                                            {item.name}
                                                            {
                                                                open ? <ChevronUp className="h-4 w-4" onClick={handleToggle} /> : <ChevronDown className="h-4 w-4" onClick={handleToggle} />
                                                            }
                                                        </div>
                                                    </NavigationMenuItem>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className=" p-2 grid grid-cols-2 items-center gap-2">
                                                    {
                                                        item.submenu.map((subItem, index) => {
                                                            return (
                                                                <DropdownMenuItem key={index}>
                                                                    <Link href={subItem.href} legacyBehavior passHref >
                                                                        <NavigationMenuLink className="flex items-center gap-2">
                                                                            <Goal className="w-4 h-4" />
                                                                            {subItem.name}
                                                                        </NavigationMenuLink>
                                                                        
                                                                    </Link>
                                                                </DropdownMenuItem>
                                                            )
                                                        })
                                                    }
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )
                                    } else {
                                        return (
                                            <NavigationMenuItem key={index}>
                                                <Link href={item.href} legacyBehavior passHref>
                                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-semibold uppercase text-sm`}>
                                                        {item.name}
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>)
                                    }
                                }
                                )
                            }
                        </NavigationMenuList>

                    </NavigationMenu>


                    <MobileNav />
                </div>
            </div>
        </nav>
    );
};