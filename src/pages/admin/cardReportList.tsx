import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import CardReport from "../../components/cardReport";

export default function CardReportList() {
  return (
    <div className="flex gap-x-3">
    <CardReport
      title="R$ 9.800,45" 
      headerTitle="+40.35%"
      subtitle="Total no mês"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={<HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />

      <CardReport
      title="R$ 15.800,45" 
      headerTitle="+21.19%"
      subtitle="Gasto alimentar"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={<HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />

      <CardReport
      title="R$ 2.800,45" 
      headerTitle="- 4.35%"
      subtitle="Custo extra"
      headerArrowIcon={<BsArrowDown size={16} className='text-red-400 font-semibold' />}
      headerIcon={<FiRefreshCw size={22} className='text-violet-400' />}
    />

    <CardReport
      title="Alta Books" 
      headerTitle="+5.35%"
      subtitle="Principal fornecedor"
      headerArrowIcon={<BsArrowUp size={14} className='text-green-400' />}
      headerIcon={ <HiOutlineCurrencyDollar size={28} className='text-violet-400' />}
    />
  </div>
  )
}