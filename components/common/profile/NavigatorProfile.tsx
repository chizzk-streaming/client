import Image from 'next/image';
import Link from 'next/link';
import Dummy from '@/assets/img/dummy.jpeg';

const NavigatorProfile = () => {
  return (
    <Link className="relative" href="/">
      <div className="bg-gradient-to-[linear-gradient(#141517,#141517),linear-gradient(180deg,#00ffa3,#027f80)] box-border overflow-hidden rounded-[50%] border bg-clip-border bg-origin-border object-cover">
        <Image
          width={26}
          height={26}
          sizes="(max-width: 640px) 26px"
          src="https://chzzk.naver.com/live/75cbf189b3bb8f9f687d2aca0d0a382b"
          alt="123"
          className=" h-full w-full object-cover"
        />
      </div>
    </Link>
  );
};

export default NavigatorProfile;
