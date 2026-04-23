"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  User,
  LogIn,
  KeySquare,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";

export function Navbar({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/* <div className="bg-professional-main text-white py-2 hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Hotline: {appGlobal.hotline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{appGlobal.times}</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{appGlobal.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/(customer)/booking" className="hover:underline">
                Đặt bàn ngay
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto">
        <div className="flex h-16 items-center px-6">
          {/* Logo */}
          <div className="mr-4 flex items-center">
            {/* <Link href="/" className="flex items-center space-x-2">
              <Image
                className="w-9 h-9"
                src="/logo/icon.png"
                alt={appGlobal.name}
                width={36}
                height={36}
              />
              <span className="text-lg font-bold hidden md:inline-block">{appGlobal.name}</span>
            </Link> */}
          </div>
          {/* <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="text-base bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-1 w-80">
                        <ul className="grid gap-1 md:w-[500px] md:grid-cols-2 rounded-md">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className="bg-transparent rounded-md">
                      <Link
                        href={item.href}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu> */}

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="">{/*w-[300px] sm:w-[400px]*/}
              <SheetHeader className="pb-0">
                <SheetTitle>
                  {/* <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/logo/logo.png"
                      alt={appGlobal.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{appGlobal.name}</span>
                      <span className="truncate text-xs">Manager</span>
                    </div>
                  </Link> */}
                </SheetTitle>
              </SheetHeader>
              <Separator />
              
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
