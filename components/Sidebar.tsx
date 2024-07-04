import Menu from '@/assets/svg/menu.svg';
import NavigatorProfile from '@/components/common/profile/NavigatorProfile.tsx';
import NavigatorTitle from '@/components/common/title/NavigatorTitle.tsx';

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 mr-[-20px] box-content w-[66px] pr-5">
      <div className="relative z-50 flex h-full w-full flex-col ">
        <header>
          <button className="pb-[10px] pl-[19px] pr-1 pt-[10px] ">
            <Menu className="hover:rounded-md hover:bg-customGray-hover" />
          </button>
        </header>
        <section className="flex-1 overflow-auto pb-[30px]">
          <nav>
            <div className="pl-4 pr-[14px]">
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
