import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Index from '@/components/common/banner/topBanner/Index';
import List from '@/components/common/banner/topBanner/List';
import HeaderTitle from '@/components/common/button/title/HeaderTitle';
import VideoCard from '@/components/common/card/VideoCard';
import Image from 'next/image';

const DummyList = [
  {
    title: '콘텐츠 제작 지원',
    description: '파트너 스트리머라면 누구나!',
    date: '7/1(월)~5(금) 23:59까지',
    imageUrl:
      'https://nng-phinf.pstatic.net/MjAyNDA3MDFfMTI3/MDAxNzE5NzYwMDczMzIw.9pDHodjOLwJEGAtsxzLoBuPbjE7nAswM8PUDxU0dIAkg.T_83mauQOOISpHjzmhie7x1nqFVcsqrlVe3z5H4wnmYg.PNG/%EC%B9%98%EC%A7%80%EC%A7%81_%ED%99%88%EC%83%81%EB%8B%A8%EC%9D%B4%EB%AF%B8%EC%A7%80.png',
  },
  {
    title: '치지직 같이보기 오픈🧀',
    date: '네이버페이 포인트까지?!',
    imageUrl:
      'https://nng-phinf.pstatic.net/MjAyNDA2MjhfNDgg/MDAxNzE5NTYxNTg5NDI0.xWyx8L1Imdtw2glE-H98NGdjnmS66cKckQtfjX4I5P4g.eKaRqZ-d5ZW85XxopAuNN9UxyOAGHeVdjc2qmCuU5T8g.PNG/%EC%8A%A4%EC%BC%80%EC%A4%84_%EB%B0%B0%EB%84%88.png',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="mx-auto flex w-full max-w-[2060px] flex-col">
        <section className="flex-auto px-[30px]">
          <div className="relative mb-6">
            <List lists={DummyList} />
          </div>
          <section className="mt-[30px]">
            <HeaderTitle title="이 라이브 어때요?" expandTitle="전체보기" />
            <div className="mt-[15px] grid grid-cols-3 gap-x-[14px] gap-y-[30px]">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
