import React, { useState, useeffect } from "react";
import { Menu } from "lucide-react";

export default function HamburgerMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="flex md:hidden">
      <Menu className="text-gray-900 dark:text-white" size={20} />
    </div>
  );
}
