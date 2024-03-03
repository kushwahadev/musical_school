"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Menu item 1  */}
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        {/* menu item 2 */}

        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All courses</HoveredLink>
            <HoveredLink href="/web-dev">Basic music theory</HoveredLink>
            <HoveredLink href="/web-dev">Advance composition</HoveredLink>
            <HoveredLink href="/web-dev">Song Writing</HoveredLink>
            <HoveredLink href="/web-dev">Music production</HoveredLink>
          </div>
        </MenuItem>

        {/* menu item 3 */}

        <Link href={"/contacts"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact US"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
