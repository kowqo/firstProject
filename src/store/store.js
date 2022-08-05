import { Cache } from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const store = new Cache({
	namespace: 'toDoMobApp',
	policy: {
		maxEntries: 50000, 
		stdTTL: 0, 
	},
	backend: AsyncStorage,
});
