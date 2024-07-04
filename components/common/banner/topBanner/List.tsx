import Index from '@/components/common/banner/topBanner/Index';
import { cn } from '@/utils/cn';
import React from 'react';
import './index.css';

const List = () => {
  return (
    <div
      className={cn(`
    list_after relative flex overflow-hidden rounded-[10px] border-[1px] border-solid 
    border-border-onlyWhite-01 bg-bg-topbanner
    `)}
    >
      <Index />
      <Index />
    </div>
  );
};

export default List;
