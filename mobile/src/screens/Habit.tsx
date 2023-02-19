import { useState, useEffect } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { generateProgressPercentage } from '../utils/generate-progress-percentage';
import { api } from '../lib/axios';
import dayjs from 'dayjs';

import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { Checkbox } from '../components/Checkbox';
import { Loading } from '../components/Loading';
import { HabitsEmpty } from '../components/HabitsEmpty';

interface Params {
  date: string;
}

interface DayInfoProps {
  completedHabits: string[];
  possibleHabits: {
    id: string;
    title: string;
  }[];
}

export function Habit() {
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  const habitsProgress = dayInfo?.possibleHabits.length
    ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length)
    : 0;

  async function fechtHabits() {
    try {
      setLoading(true);

      const response = await api.get('/day', {
        params: {
          date
        }
      });

      setDayInfo(response.data);
      setCompletedHabits(response.data.completedHabits);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível carregar as informações dos hábitos.');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleHabit(habitId: string) {
    if (completedHabits.includes(habitId)) {
      setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId));
    } else {
      setCompletedHabits(prevState => [...prevState, habitId]);
    }
  }

  useEffect(() => {
    fechtHabits();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="bg-background pt-16 px-8 flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="text-zinc-400 font-semibold text-base lowercase mt-6">{dayOfWeek}</Text>

        <Text className="text-white font-extrabold text-3xl">{dayAndMonth}</Text>

        <ProgressBar progress={habitsProgress} />

        <View className="mt-6">
          {dayInfo?.possibleHabits ? (
            dayInfo?.possibleHabits.map(habit => (
              <Checkbox
                key={habit.id}
                title={habit.title}
                checked={completedHabits.includes(habit.id)}
                onPress={() => handleToggleHabit(habit.id)}
              />
            ))
          ) : (
            <HabitsEmpty />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
