import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import colors from 'tailwindcss/colors';
import LogoImg from '../assets/logo.svg';

export function Header() {
  const { navigate } = useNavigation();

  return (
    <View className="w-full flex-row items-center justify-between">
      <LogoImg />

      <TouchableOpacity
        activeOpacity={0.7}
        className="h-11 px-4 border border-sky-500 rounded-lg flex-row items-center"
        onPress={() => navigate('new')}
      >
        <Feather name="plus" color={colors.sky[500]} size={20} />
        <Text className="text-white text-base font-semibold ml-3 ">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
