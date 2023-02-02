import { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';

import colors from 'tailwindcss/colors';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay != weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className="bg-background pt-16 flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="text-white text-3xl mt-6 font-extrabold">Criar hábito</Text>

        <Text className="text-white text-base mt-6 font-semibold">Qual seu comprometimento?</Text>

        <TextInput
          className="bg-zinc-800 text-white h-12 pl-4 mt-3 rounded-lg focus:border-2 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="text-white text-base font-semibold mt-4 mb-3">Qual a recorrência?</Text>

        {availableWeekDays.map((weekDay, i) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(i)}
            onPress={() => handleToggleWeekDay(i)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-green-600 w-full h-14 rounded-md mt-6 flex-row items-center justify-center"
        >
          <Feather name="check" size={20} color={colors.white} />

          <Text className="text-white font-semibold text-base ml-2">Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
