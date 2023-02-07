import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';

import clsx from 'clsx';
import dayjs from 'dayjs';

import { ProgressBar } from './ProgressBar';
import { Check } from 'phosphor-react';

interface HabitDayProps {
  date: Date;
  completed?: number;
  amount?: number;
}

export function HabitDay({ date, completed = 0, amount = 0 }: HabitDayProps) {
  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMoth = dayjs(date).format('DD/MM');
  const dayOfWeek = dayjs(date).format('dddd');

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('h-10 w-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
          'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
          'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
          'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
          'bg-violet-500 border-violet-400': completedPercentage >= 80
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="text-zinc-400 font-semibold">{dayOfWeek}</span>
          <span className="text-3xl leading-tight font-extrabold mt-1">{dayAndMoth}</span>

          <ProgressBar progress={completedPercentage} />

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div className="bg-zinc-800 h-8 w-8 rounded-lg border-zinc-800 flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="text-white text-xl leading-tight font-semibold group-data-[state=checked]:text-zinc-400 group-data-[state=checked]:line-through">
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow height={8} width={16} className="fill-zin-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
