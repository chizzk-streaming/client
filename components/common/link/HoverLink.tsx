import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';

interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  label?: string;
}

const HoverLink = ({ children, href, label, ...props }: HoverLinkProps) => {
  props.className;
  return (
    <Link
      href={href}
      className={`${cn(
        `relative flex-none text-inherit hover:rounded-md hover:bg-gray-700
        ${props.className}
        `,
      )}`}
      {...props}
    >
      {children}
      <span className="text-sm/[12px top-[calc(100% + 2px)] absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-600 px-[9px] py-[5px] [&:not(:hover)]:hidden">
        {label}
      </span>
    </Link>
  );
};

export default HoverLink;
