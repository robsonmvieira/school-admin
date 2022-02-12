import { ReactNode } from 'react';
export type SidebarMenuItemProps = {
  title: string;
  icon: ReactNode;
  isSideBarOpened: boolean
}
export default function SidebarMenuItem({icon, title, isSideBarOpened }: SidebarMenuItemProps) {
  return (
    <div className="flex cursor-pointer">
    { icon }
    {isSideBarOpened && <span className="text-orange-300 font-sans text-xl" >{ title }</span>}
  </div>
  )
}