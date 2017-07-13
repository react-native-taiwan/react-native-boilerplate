import { AsyncStorage } from 'react-native';

const STORAGE_PREFIX = '@App:';

export async function setItem(key, data) {
  try {
    let stringify = JSON.stringify(data);
    stringify = encrypt(stringify);
    await AsyncStorage.setItem(STORAGE_PREFIX + key, stringify);
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
}

export async function getItem(key) {
  try {
    let value = await AsyncStorage.getItem(STORAGE_PREFIX + key);
    if (value !== null) {
      value = JSON.parse(decrypt(value));
      return value;
    }
  } catch (error) {
    console.error(error);
  }
  return {};
}

export async function removeItem(key) {
  await AsyncStorage.removeItem(STORAGE_PREFIX + key);
}
