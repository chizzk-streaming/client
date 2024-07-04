import Index from '@/components/common/banner/topBanner/Index';
import List from '@/components/common/banner/topBanner/List';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[2060px] flex-col">
      <section className="flex-auto px-[30px]">
        <div className="relative mb-6">
          <List />
        </div>
      </section>
    </main>
  );
}
