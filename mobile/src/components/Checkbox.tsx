import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from 'tailwindcss/colors';

interface CheckboxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {checked ? (
        <View className="bg-green-500 h-8 w-8 rounded-lg items-center justify-center">
          <Feather name="check" color={colors.white} />
        </View>
      ) : (
        <View className="bg-zinc-900 h-8 w-8 rounded-lg" />
      )}

      <Text className="text-white font-semibold ml-3 text-base">{title}</Text>
    </TouchableOpacity>
  );
}
