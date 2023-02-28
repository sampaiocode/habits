import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';

import clsx from 'clsx';
import dayjs from 'dayjs';

import { ProgressBar } from './ProgressBar';
import { HabitsList } from './HabitsList';

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function HabitDay({ date, defaultCompleted = 0, amount = 0 }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMoth = dayjs(date).format('DD/MM');
  const dayOfWeek = dayjs(date).format('dddd');

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'h-10 w-10 border-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          {
            'bg-zinc-900 border-zinc-800': completedPercentage === 0,
            'bg-sky-900 border-sky-700': completedPercentage > 0 && completedPercentage < 20,
            'bg-sky-800 border-sky-600': completedPercentage >= 20 && completedPercentage < 40,
            'bg-sky-700 border-sky-500': completedPercentage >= 40 && completedPercentage < 60,
            'bg-sky-600 border-sky-500': completedPercentage >= 60 && completedPercentage < 80,
            'bg-sky-500 border-sky-400': completedPercentage >= 80
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="text-zinc-400 font-semibold">{dayOfWeek}</span>
          <span className="text-3xl leading-tight font-extrabold mt-1">{dayAndMoth}</span>

          <ProgressBar progress={completedPercentage} />

          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />

          <Popover.Arrow height={8} width={16} className="fill-zin-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
