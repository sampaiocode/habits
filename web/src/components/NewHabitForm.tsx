import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';
import { Check } from 'phosphor-react';
import { api } from '../lib/axios';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];

export function NewHabitForm() {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post('habits', {
      title,
      weekDays
    });

    setTitle('');
    setWeekDays([]);

    alert('Hábito criado com sucesso!');
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay);

      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full mt-6 flex flex-col">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="Exercícios, dormir bem, e etc..."
        className="text-white placeholder-zinc-400 bg-zinc-800 mt-3 p-4 rounded-lg"
        autoFocus
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual é a recorrência?
      </label>

      <div className="mt-3 flex flex-col gap-2">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className="flex items-center gap-3 group"
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="bg-zinc-800 h-8 w-8 rounded-lg border-zinc-800 flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="text-white text-base leading-tight">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 bg-green-600 font-semibold rounded-lg p-4 flex items-center justify-center gap-3 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
