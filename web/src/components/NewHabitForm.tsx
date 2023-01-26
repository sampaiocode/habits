import { Check } from 'phosphor-react';

export function NewHabitForm() {
  return (
    <form className="w-full mt-6 flex flex-col">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="Exercícios, dormir bem, e etc..."
        className="text-white placeholder-zinc-400 bg-zinc-800 mt-3 p-4 rounded-lg"
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual é a recorrência?
      </label>

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
