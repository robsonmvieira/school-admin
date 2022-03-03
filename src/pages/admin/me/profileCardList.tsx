import { BsArrowUp, BsArrowDown } from "react-icons/bs"

import CardReport from "../../../components/cardReport"
import { FiRefreshCw } from "react-icons/fi"
import { HiOutlineCurrencyDollar } from "react-icons/hi"

export const ProfileCardList = () => {

  return (
    <div className="flex gap-x-3">
    <CardReport
      title="R$ 2.750,00"
      headerTitle="+0.3%"
      subtitle="Último vencimento"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={<HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />

      <CardReport
      title="R$ 450,00"
      headerTitle="+1.5%"
      subtitle="Vale Alimentação"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={<HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />

      <CardReport
      title="R$ 0.00"
      headerTitle="- 0%"
      subtitle="Descontos"
      headerArrowIcon={<BsArrowDown size={16} className='text-red-400 font-semibold' />}
      headerIcon={<FiRefreshCw size={22} className='text-violet-400' />}
    />

    <CardReport
      title="Auxiliar Administrativo"
      headerTitle="2"
      subtitle="Promoções"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={ <HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />
  </div>
  )
}

export default ProfileCardList
