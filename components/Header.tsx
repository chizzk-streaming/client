import Button from '@/components/common/button/Button';
import Link from 'next/link';
import Logo from '@/assets/gif/logo.gif';
import Search from '@/components/common/search/Search.tsx';
import Image from 'next/image';
import TicketSvg from '@/assets/svg/ticket.svg';
import ThemeSvg from '@/assets/svg/theme.svg';
import HoverLink from '@/components/common/link/HoverLink';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-[60px] w-full items-center justify-between">
      <h1 className=" fixed left-[66px] flex h-[60px] w-[70px]">
        <Link href="/" className="py-[15px]">
          <Image
            src={Logo}
            alt="logo"
            width={70}
            height={30}
            className="aspect-[70/30] object-cover"
          />
        </Link>
      </h1>
      <div className="absolute left-1/2 top-[2px] z-[201] w-[300px] -translate-x-1/2">
        <Search />
      </div>
      <div className="flex h-full w-full items-center justify-end pr-5">
        {/* <HoverLink href="/" label="라운지 티켓">
          <TicketSvg />
        </HoverLink>
        <HoverLink href="/" label="테마">
          <ThemeSvg />
        </HoverLink> */}
        <Button>
          <Link href="/login">로그인</Link>
        </Button>
      </div>
    </header>
  );
}
