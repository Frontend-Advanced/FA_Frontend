import { HEADER_ITEMS } from "@/constants";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center h-16">
      <div className="max-w-6xl h-full flex flex-1 items-center justify-between">
        <div className="gap-x-[15px] md:flex hidden items-center">
          <h1>FA</h1>
          {HEADER_ITEMS.map((nav) => (
            <Link
              className="text-gray-400 text-[15px] font-medium"
              key={nav.id}
              href={nav.href}
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <MenuIcon className="md:hidden block" size={36} />
        <button className="rounded-full px-3 py-2 text-background bg-foreground text-[14px] font-semibold">
          Explore
        </button>
      </div>
    </header>
  );
};
export default Header;
