import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';

interface HeaderTitleProps {
  title: string;
  expandTitle?: string;
}

const HeaderTitle = ({ title, expandTitle }: HeaderTitleProps) => {
  return (
    <div className="flex w-full items-center gap-[10px]">
      <strong className="flex-none text-[19px] font-extrabold text-content-01">
        {title}
      </strong>
      {expandTitle && (
        <Link
          href="/"
          className={cn(`
      mb-[-5px] ml-auto mr-[-5px] mt-[-5px] flex-none rounded-[5px] p-[5px] text-[15px]
      font-extrabold text-content-03 hover:bg-bg-white-rgb
      `)}
        >
          {expandTitle}
        </Link>
      )}
    </div>
  );
};

export default HeaderTitle;
