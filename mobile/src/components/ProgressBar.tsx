import { View } from 'react-native';

interface ProgressBarProps {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <View className="bg-zinc-700 w-full h-3 rounded-xl mt-4">
      <View className="bg-violet-600 h-3 rounded-xl" style={{ width: `${progress}%` }} />
    </View>
  );
}
