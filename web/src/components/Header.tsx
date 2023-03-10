import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'phosphor-react';

import logoImg from '../assets/logo.svg';
import { NewHabitForm } from './NewHabitForm';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Logo do Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="font-semibold px-6 py-4 border border-sky-500 rounded-lg flex items-center gap-3 hover:border-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Plus size={20} className="text-sky-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

          <Dialog.Content className="w-full max-w-md bg-zinc-900 p-10 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="text-zinc-400 hover:text-zinc-200 absolute right-6 top-6 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl font-extrabold leading-tight">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
