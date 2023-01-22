import { Plus } from 'phosphor-react';
import logoImg from '../assets/logo.svg';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Logo do Habits" />

      <button
        type="button"
        className="font-semibold px-6 py-4 border border-violet-500 rounded-lg flex items-center gap-3 hover:border-violet-300 transition-colors"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
}
