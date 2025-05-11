export interface NavItem{
    title: string;
    href?: string;
    description?: string;
}

export interface NavItemWithWithChildren extends NavItem{
    card?: NavItemWithWithChildren[];
    menu?: NavItemWithWithChildren[];
}

export type MainNavItem = NavItemWithWithChildren;