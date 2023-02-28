interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="bg-zinc-700 w-full mt-4 h-3 rounded-xl">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        className="bg-sky-600 h-3 rounded-xl transition-all"
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  );
}
