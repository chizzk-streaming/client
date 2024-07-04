import Menu from '@/assets/svg/menu.svg';
import HoverLink from '@/components/common/link/HoverLink';
import NavigatorProfile from '@/components/common/profile/NavigatorProfile.tsx';
import NavigatorTitle from '@/components/common/title/NavigatorTitle.tsx';
import LiveSvg from '@/assets/svg/live.svg';
import ReplaySvg from '@/assets/svg/replay.svg';
import CategorySvg from '@/assets/svg/category.svg';
import FollowingSvg from '@/assets/svg/following.svg';
import { headers } from 'next/headers';

const Service = [
  {
    title: '전체 \n 라이브',
    icon: <LiveSvg />,
    link: '/',
  },
  {
    title: '다시보기',
    icon: <ReplaySvg />,
    link: '/videos',
  },
  {
    title: '카테고리',
    icon: <CategorySvg />,
    link: '/category',
  },
  {
    title: '팔로잉',
    icon: <FollowingSvg />,
    link: '/following',
  },
];

const Sidebar = () => {
  const headerList = headers();
  const headerPathname = headerList.get('x-current-path');

  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 mr-[-20px] box-content w-[78px]">
      <div className="relative z-50 flex h-full w-full flex-col ">
        <header>
          <button className="pb-[10px] pl-[19px] pr-1 pt-[10px] ">
            <Menu className="hover:rounded-md hover:bg-customGray-hover" />
          </button>
        </header>
        <section className="flex-1 overflow-auto border-b-2 pb-[30px]">
          <div className=" px-4 pb-[10px] pt-1 ">
            {Service.map(({ title, icon, link }) => {
              return (
                <HoverLink
                  href={link}
                  className="hover:text-content-02 text-content-04"
                  aria-current={headerPathname === link ? 'page' : undefined}
                >
                  <div className="hover:bg-bg-overlay-03 flex flex-col items-center rounded-md pb-1 pt-[6px] text-center ">
                    {icon}
                    <span className="whitespace-pre-line text-[10px] font-extrabold">
                      {title}
                    </span>
                  </div>
                </HoverLink>
              );
            })}
          </div>
          <nav>
            <div className="pb-4 pl-5 pr-5 pt-[11px]">
              <NavigatorTitle>추천</NavigatorTitle>
              <div>
                <NavigatorProfile />
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
