import AsyncStorage from '@react-native-async-storage/async-storage';

export const SetAsyncItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getAsyncItem = async (key: string) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
  }
};

export const removeAsyncItem = async (key: string) => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
