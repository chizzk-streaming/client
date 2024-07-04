import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './index.css';

const Index = () => {
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
              콘텐츠 제작 지원
            </strong>
            <div className="mt-[3px] overflow-ellipsis whitespace-nowrap break-words text-xs leading-4 text-content-04">
              파트너 스트리머라면 누구나!
            </div>
          </div>
          <div className="mt-2 break-all text-xs font-bold text-content-chzzk-02">
            7/1(월)~5(금) 23:59까지
          </div>
        </div>
        <div className="h-full w-[133px] flex-none bg-cover bg-center bg-no-repeat">
          <Image
            src="https://nng-phinf.pstatic.net/MjAyNDA3MDFfMTI3/MDAxNzE5NzYwMDczMzIw.9pDHodjOLwJEGAtsxzLoBuPbjE7nAswM8PUDxU0dIAkg.T_83mauQOOISpHjzmhie7x1nqFVcsqrlVe3z5H4wnmYg.PNG/%EC%B9%98%EC%A7%80%EC%A7%81_%ED%99%88%EC%83%81%EB%8B%A8%EC%9D%B4%EB%AF%B8%EC%A7%80.png"
            alt="banner"
            width={133}
            height={90}
          />
        </div>
      </Link>
    </div>
  );
};

export default Index;
