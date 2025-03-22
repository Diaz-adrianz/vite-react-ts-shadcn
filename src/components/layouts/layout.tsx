import { Link, Outlet } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  useSidebar,
} from '../ui/sidebar';
import { Button } from '../ui/button';
import {
  BellIcon,
  ChevronRightIcon,
  ChevronsUpDown,
  Command,
  LogOutIcon,
  SidebarIcon,
  UserIcon,
} from 'lucide-react';
import { Navigation, Navigations } from '@/data/navigations';
import useLocale from '@/hooks/use-locale';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import ThemeSelect from '../molecules/theme-select';

const View = () => {
  const { toggleSidebar, isMobile } = useSidebar();
  const { translate } = useLocale();

  return (
    <>
      <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
        <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <SidebarIcon />
          </Button>
          <div className="ms-auto"></div>
          <ThemeSelect />
          <Button variant="ghost" size="icon">
            <BellIcon />
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="pointer-events-none">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <h6 className="truncate font-medium">Brand.</h6>
                    <small className="truncate text-xs">Enterprise</small>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            {Navigations.map((nav, i) => (
              <SidebarGroup key={i}>
                {nav.label && (
                  <SidebarGroupLabel>{translate(nav.label)}</SidebarGroupLabel>
                )}
                <SidebarGroupContent>
                  <SidebarMenu>
                    {nav.children?.map((item, j) => (
                      <NavItem key={j} item={item} />
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarFooter>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={''} alt={''} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1">
                    <p className="truncate">Username</p>
                    <small className="truncate">username@email.com</small>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
                side={isMobile ? 'bottom' : 'right'}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserIcon />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BellIcon />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>
        <Outlet />
      </div>
    </>
  );
};

const NavItem = ({ item }: { item: Navigation }) => {
  const { translate } = useLocale();

  if (item.children?.length) {
    return (
      <Collapsible asChild>
        <SidebarMenuItem>
          <SidebarMenuSubButton className="no-underline">
            {item.icon && <item.icon />}
            <p>{translate(item.label)}</p>
          </SidebarMenuSubButton>
          <CollapsibleTrigger asChild>
            <SidebarMenuAction className="data-[state=open]:rotate-90">
              <ChevronRightIcon />
            </SidebarMenuAction>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children.map((subItem, i) => (
                <NavItem key={i} item={subItem} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild>
        <Link to={item.to ?? '#'} className="no-underline">
          {item.icon && <item.icon />}
          <p>{translate(item.label)}</p>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

const Layout = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <View />
      </SidebarProvider>
    </div>
  );
};

export default Layout;
