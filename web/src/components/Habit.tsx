interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-900 text-white w-10 h-10 rounded m-2 flex justify-center items-center">
      {props.completed}
    </div>
  );
}
