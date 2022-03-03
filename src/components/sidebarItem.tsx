import { forwardRef, ReactNode } from 'react';
export type SidebarMenuItemProps = {
  title: string;
  icon: ReactNode;
  isSideBarOpened: boolean,

}

const SidebarMenuItem = ({icon, title, isSideBarOpened, ...rest }: SidebarMenuItemProps, ref: any) => {

      return (
        <a className="flex cursor-pointer"  ref={ref} {...rest}>
        { icon }
        {isSideBarOpened && <span className="text-orange-300 font-sans text-lg" >{ title }</span>}
      </a>
      )
}

export default forwardRef(SidebarMenuItem)
