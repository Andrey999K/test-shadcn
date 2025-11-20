"use client";
import React from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ThemeSelector } from "@/components/ui/theme-selector";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import type { Header } from "@/payload-types";

interface HeaderClientProps {
  data: Header
}

export function MyHeader({ data }: HeaderClientProps) {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  // const links = [
  //   {
  //     label: "Features",
  //     href: "#",
  //   },
  //   {
  //     label: "Pricing",
  //     href: "#",
  //   },
  //   {
  //     label: "About",
  //     href: "#",
  //   },
  // ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      style={{
        padding: `${data.padding}px`
      }}
      className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
        "border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50":
        scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <div className="rounded-md p-2 hover:bg-accent">
          <Logo className="h-4" />
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {data.navItems?.map(({ link }, i) => (
            <a
              className={buttonVariants({ variant: "ghost" })}
              href={link.url || "#"}
              key={i}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
          {/*<ThemeToggle />*/}
          <ThemeSelector />
        </div>
        <Button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="outline"
        >
          <MenuToggleIcon className="size-5" duration={300} open={open} />
        </Button>
      </nav>
      <MobileMenu className="flex flex-col justify-between gap-2" open={open}>
        <div className="grid gap-y-2">
          {data.navItems?.map(({ link }) => (
            <a
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.url || "#"}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full bg-transparent" variant="outline">
            Sign In
          </Button>
          <Button className="w-full">Get Started</Button>
          {/*<ThemeToggle />*/}
          <ThemeSelector />
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
      id="mobile-menu"
    >
      <div
        className={cn(
          "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
          "size-full p-4",
          className
        )}
        data-slot={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
