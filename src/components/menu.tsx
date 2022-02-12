import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { RiUserLine, RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";

import Image from "next/image";

type MenuProps = {
  onMenuHandler: () => void
  onUserAvatarHandler: () => void
  menuIsOpen: boolean
}


export default function Menu({ menuIsOpen = false, onMenuHandler, onUserAvatarHandler }: MenuProps) {
  return (
    <header className="md:flex p-5 items-center ">
    <div className="divide-x md:w-1/5">
      <a href="#" className="font-sans font-bold text-white">
        Sonho Meu Admin
      </a>
    </div>
    <div className="flex items-center">
      <div className="md:flex items-center mr-14">
        <HiOutlineMenuAlt2
         
          onClick={onMenuHandler}
          size={24} 
          className="cursor-pointer text-gray-500"  />
        <span className="ml-16 font-sans font-bold text-2xl text-white">Fornecedores</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-gray-900 rounded-full px-6 h-14 w-96">
          <input
            type="text"
            className="bg-inherit mr-32 text-white focus:outline-none "
          />
          <BsSearch size={24} className='text-gray-500' />
        </div>
        <button className="w-14 h-14 ml-10 rounded-full text-5xl font-bold text-white bg-blue-900 pb-4">
          +
        </button>
      </div>
    </div>
    <div className="mx-auto flex-grow flex items-end w-full justify-items-end">
      <div className="flex items-center w-full justify-end">
        <div className="mr-6 relative">
          <MdOutlineNotificationsNone size={42} className="text-gray-200" />
          <span 
            className="absolute -top-3 left-6 pt-1 bg-red-500 w-8 h-8 text-white font-sans font-bold rounded-full text-center">4</span>
        </div>
        <div
          className="relative"
          onClick={onUserAvatarHandler}
        >
          <div className="w-16 h-16 bg-slate-500 mr-8 rounded-full cursor-pointer">
            <Image
              className="rounded-full"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1562093772-c36f2d77edc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="userAvatar"
            />
          </div>
          {menuIsOpen && (
            <div className="absolute bg-gray-900  shadow-xl top-24 right-8 h-32 w-52 rounded-lg">
              <div className="drop-shadow-2x p-4 space-y-4">
                <div className="cursor-pointer flex">
                  <RiUserLine size={22} className="text-red-400 mr-2" />
                  <span className="text-gray-400 hover:text-gray-500">
                    Minha conta
                  </span>
                </div>
                <div className="cursor-pointer text-gray-400 flex">
                  <RiLogoutCircleRLine
                    size={22}
                    className="text-red-500 mr-2"
                  />
                  <span className="text-gray-400 hover:text-gray-500">
                    Sair
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
  )
}