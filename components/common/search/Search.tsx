import SearchIcon from '@/assets/svg/search.svg';

const Search = () => {
  return (
    <div className="w-[calc(100% - 660px)] absolute left-2/4 top-[11px] z-[201] min-w-[161px] max-w-[400px] -translate-x-1/2 ">
      <form action="">
        <div className=" flex h-[38px] items-center rounded-[20px] border border-grayDark pl-[14px] pr-2 focus-within:border-green-300 ">
          <input
            type="text"
            placeholder="스트리머, 게임 영상 검색"
            title="검색어"
            className="h-full flex-1 bg-transparent text-[15px] text-customGray-300  placeholder-customGray-100 focus:outline-none "
          />
          <button className="h-9 w-[30px]">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
