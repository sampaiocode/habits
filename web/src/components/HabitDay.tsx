import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

// interface HabitDayProps {
//   completed: number;
// }

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="text-zinc-400 font-semibold">sexta-feira</span>
          <span className="text-3xl leading-tight font-extrabold mt-1">27/01</span>

          <ProgressBar progress={40} />

          <Popover.Arrow height={8} width={16} className="fill-zin-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
