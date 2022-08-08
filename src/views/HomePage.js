import { View, Text, Image, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import { Ellipses, Task, TimerRectangle } from '../components';
import uuid from 'react-native-uuid';
import { store } from '../store/store';
import LogOutIcon from '../assets/images/logout.svg';
import PlusIcon from '../assets/images/plussquare.svg';
import styles from '../styles/homePageStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = ({ route, navigation }) => {
	const [time, setTime] = useState([]);

	const [userData, setUserData] = useState([]);

	const { email } = route.params;

	useEffect(() => {
		onLoadTodo(email);
		const updateTime = () => {
			const date = new Date();
			const time = date.toLocaleTimeString('ru-RU');
			setTime((state) => [...time.split(':')]);
		};
		updateTime();
		const interval = setInterval(() => updateTime(), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		uploadTasks(email, userData);
	}, [userData]);

	const onLoadTodo = async (email) => {
		try {
			const userData = await store.get(email);
			const data = JSON.parse(userData);
			setUserData((state) => data);
		} catch (error) {
			Alert.alert('error', 'Something went wrong');
		}
	};

	const onComplete = (id) => {
		const filteredTasks = userData.tasks.map((task) => {
			if (task.id === id) {
				task.comp = !task.comp;
			}
			return task;
		});

		setUserData((state) => ({
			...state,
			tasks: [...filteredTasks],
		}));
	};

	const onLogout = () => navigation.navigate('Slash');

	const addToDo = () => {
		Alert.prompt('Enter Task', '', [
			{
				text: 'Cancel',
				onPress: () => {},
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: (text) => {
					if (text.trim() !== '') addTodoHadler(text);
				},
			},
		]);
	};

	const uploadTasks = async (email, userData) => {
		await store.set(email, JSON.stringify(userData));
	};

	const addTodoHadler = (text) => {
		setUserData((state) => ({
			...state,
			tasks: [...state.tasks, { id: state.tasks.length, key: uuid.v4(), text, comp: false }],
		}));
	};

	const renderItem = ({ item }) => {
		return (
			<Task id={item.id} onComplete={onComplete} key={item.key} comp={item.comp} text={item.text} />
		);
	};
	return (
		<SafeAreaView
			style={[mainStyles.container, styles.container]}
			edges={['left', 'right', 'bottom']}>
			<Ellipses home={true} />
			<View style={styles.headerContainer}>
				<LogOutIcon style={styles.logo} onPress={onLogout} />
				<Image style={styles.image} source={require('../assets/images/Andrew.png')} />
				<Text style={textStyles.header}>Welcome {userData.name}!</Text>
			</View>
			<View style={styles.timer}>
				<TimerRectangle>{time[0]}</TimerRectangle>
				<Text style={styles.text}>:</Text>
				<TimerRectangle>{time[1]}</TimerRectangle>
				<Text style={styles.text}>:</Text>
				<TimerRectangle>{time[2]}</TimerRectangle>
			</View>
			<View style={styles.tasksBlock}>
				<Text style={[textStyles.header, styles.taskH1]}>Tasks List</Text>
				<View style={styles.listWrapper}>
					<FlatList
						bounces={false}
						data={userData.tasks}
						renderItem={renderItem}
						style={styles.viewTaskContainer}
						contentContainerStyle={styles.listContent}
						keyExtractor={(item) => item.key}
						ListHeaderComponent={
							<View style={styles.tasksHeaderBlock}>
								<Text style={[styles.tasksHeader]}>Daily Tasks</Text>
								<PlusIcon onPress={addToDo} />
							</View>
						}
						stickyHeaderIndices={[0]}
						ListHeaderComponentStyle={{ backgroundColor: '#fff' }}
						ListEmptyComponent={<Text>No Tasks</Text>}></FlatList>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default HomePage;
