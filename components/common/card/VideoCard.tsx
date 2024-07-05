import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LiveText from '@/assets/svg/liveText.svg';

const VideoCard = () => {
  return (
    <div className="h-full break-words break-all">
      <Link href="/" className="relative block rounded-xl">
        <Image
          src="https://livecloud-thumb.akamaized.net/chzzk/livecloud/KR/stream/26464698/live/6760596/record/29539476/thumbnail/image_480.jpg?date=1720107750000"
          alt="123"
          className=" left-0 top-0 w-full rounded-[13px]"
          width={260}
          height={146}
        />
        <div className="absolute left-[6px] top-[6px] z-[1]">
          <em className="inline-flex h-5 min-w-[42px] items-center justify-center rounded bg-live px-[5px] text-xs">
            <LiveText />
          </em>
          <span className="ml-[6px] inline-flex h-5 items-center rounded bg-bg-black-fixed-rgb px-[5px] text-xs font-semibold text-content-01">
            13,244명 시청
          </span>
        </div>
      </Link>
      <div className="mt-3 flex w-full min-w-0">
        <div className="mr-[10px] flex-none">
          <Link
            href="/"
            className="relative block overflow-hidden rounded-[50%] bg-bg-black-rgb bg-cover bg-no-repeat"
          >
            <Image
              src="https://nng-phinf.pstatic.net/MjAyMzEyMTVfMTgx/MDAxNzAyNjAxMjEyMTYw.Hw6vs76aI0L1zeu4fziwXDE35gidFriwTSgAjq7KWxUg.0V3KaKvctGKcVYa76UiDVTXMjXeUSuUezHX6nGU4y9kg.PNG/123.png?type=f120_120_na"
              width={40}
              height={40}
              alt="creator"
            />
          </Link>
        </div>
        <div className="flex min-w-0 flex-col text-content-04">
          <Link
            href="/"
            className="line-clamp-2 overflow-hidden text-ellipsis text-[15px] font-semibold text-content-02"
          >
            월간 인챈트 7월 - 따효니,네클릿
          </Link>
          <Link href="" className=" text-[13px] leading-[15px]">
            <span className=" max-w-full overflow-hidden ">
              <span className="overflow-hidden overflow-ellipsis whitespace-nowrap font-extrabold">
                한동숙
              </span>
              <Image
                src="https://ssl.pstatic.net/static/nng/glive/resource/p/static/media/icon_official.a53d1555f8f4796d7862.png"
                width={13}
                height={13}
                alt="인증 마크"
                className="mb-[1px] ml-[3px] inline-block "
              />
            </span>
          </Link>
          <div className="mt-[7px] flex gap-1 font-extrabold">
            <Link href="/" className="leading-[15px]">
              <span className="rounded-[5px] bg-bg-04-rgb px-[6px] py-1 text-[11px] text-content-04">
                talk
              </span>
            </Link>
            <Link href="/" className="leading-[15px]">
              <span className="rounded-[5px] border-[1px] border-solid border-border-01-rgb px-[6px] py-[3px] text-[11px] text-content-04 ">
                인챈트
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
