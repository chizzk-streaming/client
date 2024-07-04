import Image from 'next/image';
import Link from 'next/link';
import Dummy from '@/assets/img/dummy.jpeg';

const NavigatorProfile = () => {
  return (
    <Link className="relative" href="/">
      <div className="flex flex-col gap-[10px] px-[3px] pt-2">
        <div
          className="box-content h-[30px] w-[30px] overflow-hidden rounded-full border	 border-green-500 bg-clip-border bg-origin-border hover:border-[3px]"
          style={{ overflowClipMargin: 'content-box' }}
        >
          <Image
            src={Dummy}
            alt="123"
            className="aspect-[1/1] overflow-clip object-cover "
          />
        </div>
        <div
          className="box-content h-[30px] w-[30px] overflow-hidden rounded-full border	 border-green-500 bg-clip-border bg-origin-border hover:border-[3px]"
          style={{ overflowClipMargin: 'content-box' }}
        >
          <Image
            src={Dummy}
            alt="123"
            className="aspect-[1/1] overflow-clip object-cover "
          />
        </div>
        <div
          className="box-content h-[30px] w-[30px] overflow-hidden rounded-full border	 border-green-500 bg-clip-border bg-origin-border hover:border-[3px]"
          style={{ overflowClipMargin: 'content-box' }}
        >
          <Image
            src={Dummy}
            alt="123"
            className="aspect-[1/1] overflow-clip object-cover "
          />
        </div>
      </div>
    </Link>
  );
};

export default NavigatorProfile;
