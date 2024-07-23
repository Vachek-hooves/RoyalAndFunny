import AsyncStorage from '@react-native-async-storage/async-storage';

// easy level
export const saveQuizzLevel = async (data, level) => {
  await AsyncStorage.setItem(level, JSON.stringify(data));
  try {
  } catch (error) {
    console.log('Data saving error', error);
  }
};

export const fetchQuizzLevel = async level => {
  try {
    const data = await AsyncStorage.getItem(level);
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Data fetching error', error);
    return [];
  }
};

export const saveGameScore = async data => {
  try {
    await AsyncStorage.setItem('score', JSON.stringify(data));
  } catch (error) {
    console.log('game score saving error', error);
  }
};

export const getGameScore = async () => {
  try {
    const data = await AsyncStorage.getItem('score');
    return data !== null ? JSON.parse(data) : [];
  } catch (error) {
    console.log('game score fetching error', error);
    return [];
  }
};
