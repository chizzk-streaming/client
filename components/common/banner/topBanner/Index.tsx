import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './index.css';

export interface IndexProps {
  title: string;
  description?: string;
  date: string;
  imageUrl: string;
}

const Index = ({ date, imageUrl, title, description }: IndexProps) => {
  return (
    <div
      className={cn(`
      banner_item relative w-1/3 flex-none
      overflow-hidden hover:bg-bg-04
    `)}
    >
      <Link href="/" className="relative flex h-[90px] items-center pl-[18px]">
        <div className="flex-auto overflow-hidden">
          <div className="h-[36px] overflow-hidden">
            <strong className="line-clamp-2 overflow-hidden overflow-ellipsis break-words text-sm font-semibold leading-[18px] text-content-02">
              {title}
            </strong>
            {description && (
              <div className="mt-[3px] overflow-ellipsis whitespace-nowrap break-words text-xs leading-4 text-content-04">
                {description}
              </div>
            )}
          </div>
          <div className="mt-2 break-all text-xs font-bold text-content-chzzk-02">
            {date}
          </div>
        </div>
        <div className="h-full w-[133px] flex-none bg-cover bg-center bg-no-repeat">
          <Image src={imageUrl} alt={title} width={133} height={90} />
        </div>
      </Link>
    </div>
  );
};

export default Index;
