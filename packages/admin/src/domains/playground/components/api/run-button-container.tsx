'use client';

import { useEffect } from 'react';

import { cn } from '@/lib/utils';

import { Icon } from '@/app/components/icon';
import { useApiPlaygroundContext } from '../../context/api-playground-context';


export function RunButtonContainer() {
  const { setButtonContainer, apiRunState } = useApiPlaygroundContext();

  useEffect(() => {
    const el = document.getElementById('button-container') as HTMLDivElement;
    if (!el) return;

    setButtonContainer(el);
  }, []);

  return (
    <div className="p-2 rounded-xl relative run-button-container mx-auto border-kpl-border-2 border-[0.5px] w-fit">
      <span
        className={cn(
          'bg-[#5f5fc5] h-10 relative justify-center flex  items-center flex-col-reverse gap-1 border-[0.5px] border-[#a5a5f1] rounded text-sm font-medium text-kpl-el-5 w-[10.25rem] py-2 px-3',
          apiRunState === 'loading' ? 'opacity-50' : '',
        )}
        id="button-container"
      >
        {apiRunState === 'loading' ? null : (
          <span data-state="api" className="flex peer absolute z-10 items-center gap-1">
            <Icon name="activity" />
            Run Api
          </span>
        )}
      </span>
    </div>
  );
}