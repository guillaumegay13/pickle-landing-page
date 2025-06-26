import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-4 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img 
          src="/launcher_icon.png" 
          alt="Pickle app logo" 
          className="w-10 h-10"
        />
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <HashLink smooth to="/#pricing" className="hover:text-gray-600 transition-colors">
          {t('header.pricing')}
        </HashLink>
        <Link to="/terms" className="hover:text-gray-600 transition-colors">
          {t('header.terms')}
        </Link>
        <Link to="/privacy" className="hover:text-gray-600 transition-colors">
          {t('header.privacy')}
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="flex items-center space-x-2">
        <LanguageSwitcher />

        {/* Download Button */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" /> {t('header.download')}
          </Button>
        </a>
      </div>

      {/* Mobile Menu - Hidden on larger screens */}
      <div className="md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <ListItem href="/#pricing">{t('header.pricing')}</ListItem>
                  <ListItem href="/terms">{t('header.terms')}</ListItem>
                  <ListItem href="/privacy">{t('header.privacy')}</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
