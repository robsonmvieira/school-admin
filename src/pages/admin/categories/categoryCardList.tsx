import { BsArrowUp, BsArrowDown } from "react-icons/bs"
import { FiRefreshCw } from "react-icons/fi"
import { HiOutlineCurrencyDollar } from "react-icons/hi"
import CardReport from "../../../components/cardReport"
import { useAdmin } from "../../../contexts/useAdmin"

const CategoryCardList = () => {
  const { categories } = useAdmin()

  return (
    <div className="flex gap-x-3">
    <CardReport
      title="Almoxarifado"
      headerTitle="1"
      subtitle="Crítica"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={<HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />

      <CardReport
      title="Cantina"
      headerTitle="40"
      subtitle="Mais itens cadastrados"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={<HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />

      <CardReport
      title="Categorias"
      headerTitle="0"
      subtitle="Bloqueadas"
      headerArrowIcon={<BsArrowDown size={16} className='text-red-400 font-semibold' />}
      headerIcon={<FiRefreshCw size={22} className='text-violet-400' />}
    />

    <CardReport
      title={`Categorias`}
      headerTitle={`${categories.length}`}
      subtitle="Registradas"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={ <HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />
  </div>
  )
}

export default CategoryCardList
