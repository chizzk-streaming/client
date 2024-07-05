import Index, { IndexProps } from '@/components/common/banner/topBanner/Index';
import { cn } from '@/utils/cn';
import React from 'react';
import './index.css';

interface ListProps {
  lists: IndexProps[];
}

const List = ({ lists }: ListProps) => {
  return (
    <div
      className={cn(`
    list_after relative flex overflow-hidden rounded-[10px] border-[1px] border-solid 
    border-border-onlyWhite-01 bg-bg-topbanner
    `)}
    >
      {lists.map((list) => {
        return <Index key={list.title} {...list} />;
      })}
    </div>
  );
};

export default List;
