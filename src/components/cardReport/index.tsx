import { ReactNode } from 'react';

export type CardReportProps = {
  headerIcon: ReactNode;
  headerTitle: string;
  headerArrowIcon: ReactNode;
  title: string;
  subtitle: string;
}

export default function CardReport({ headerIcon, headerTitle, headerArrowIcon, subtitle, title }: CardReportProps) {
  return (
    <div className="flex flex-col p-4 w-1/4 bg-gray-900 rounded-lg gap-y-3">
      <div className="flex items-center gap-x-3">
        { headerIcon }
        <span className="text-green-400 font-sans text-xs font-medium ">
          { headerTitle  }
        </span>
        { headerArrowIcon }
      </div>
      <span className="text-white font-sans font-semibold text-3xl">
        { title }
      </span>
      <span className="text-sm tracking-wide text-gray-500">{ subtitle  }</span>
    </div>
  );
}
