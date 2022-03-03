import Link from 'next/link'
import SidebarMenuItem from './sidebarItem'

import { HiOutlineDocumentReport } from 'react-icons/hi'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { BiCategory, BiSupport } from 'react-icons/bi'
import { FaUserAstronaut, FaUsers } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'

export type SidebarProps = {
  isSideBarOpened: boolean
}
export default function Sidebar({ isSideBarOpened }: SidebarProps) {
  return (
    <aside
      className={`p-8  bg-gray-900 ${
        isSideBarOpened ? 'w-72' : 'w-28'
      } ease-in duration-200 custom-height`}
    >
      <h3 className="text-2xl font-bold font-sans text-orange-400">Menu</h3>
      <div className="mt-7 space-y-7">
        <Link href='/admin/suppliers' passHref>
        <SidebarMenuItem
          title="Fornecedores"
          isSideBarOpened={isSideBarOpened}
          icon={<BiSupport size={28} className="mr-4 text-orange-300" />}
        />
        </Link>

        <SidebarMenuItem
          title="Professores"
          isSideBarOpened={isSideBarOpened}
          icon={<GiTeacher size={28} className="mr-4 text-orange-300" />}
        />


        <SidebarMenuItem
          title="Alunos"
          isSideBarOpened={isSideBarOpened}
          icon={<FaUsers size={28} className="mr-4 text-orange-300" />}
        />
        <Link href='/admin/me' passHref>
        <SidebarMenuItem

          title="Meu perfil"
          isSideBarOpened={isSideBarOpened}
          icon={<FaUserAstronaut size={28} className="mr-4 text-orange-300" />}
        />
        </Link>
        <Link href='/admin/categories' passHref>

          <SidebarMenuItem
            title="Categorias"
            isSideBarOpened={isSideBarOpened}
            icon={<BiCategory size={28} className="mr-4 text-orange-300" />}
            />
          </Link>

        <SidebarMenuItem
          title="Relatórios"
          isSideBarOpened={isSideBarOpened}
          icon={
            <HiOutlineDocumentReport
              size={28}
              className="mr-4 text-orange-300"
            />
          }
        />

        <SidebarMenuItem
          title="Sair"
          isSideBarOpened={isSideBarOpened}
          icon={
            <RiLogoutCircleRLine size={28} className="mr-4 text-orange-300" />
          }
        />
      </div>
    </aside>
  )
}
