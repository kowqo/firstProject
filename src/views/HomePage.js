import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Alert,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ellipses from '../components/Ellipses/Ellipses';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import TimerRectangle from '../components/TimerRectangle/TimerRectangle';
import Task from '../components/Task/Task';
import uuid from 'react-native-uuid';
import { store } from '../store/store';
import LogOutIcon from '../assets/images/logout.svg';
import PlusIcon from '../assets/images/plussquare.svg';

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
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: (text) => addTodoHadler(text),
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

	const renderTodos = (data) => {
		if (data && data.length === 0) return <Text>No Tasks</Text>;

		return data?.map(({ text, comp, key, id }) => (
			<Task id={id} onComplete={onComplete} key={key} comp={comp} text={text} />
		));
	};
	const renderItem = ({ item }) => {
		return (
			<Task id={item.id} onComplete={onComplete} key={item.key} comp={item.comp} text={item.text} />
		);
	};

	const todos = renderTodos(userData.tasks);

	return (
		<View style={[mainStyles.container, styles.container]}>
			<Ellipses home={true} />
			<View style={styles.headerContainer}>
				<LogOutIcon style={styles.logo} onPress={onLogout} />
				<Image style={styles.image} source={require('../assets/images/Andrew.png')} />
				<Text style={textStyles.header}>Welcome {userData.name}</Text>
			</View>
			<View style={styles.timer}>
				<TimerRectangle>{time[0]}</TimerRectangle>
				<Text style={styles.text}>:</Text>
				<TimerRectangle>{time[1]}</TimerRectangle>
				<Text style={styles.text}>:</Text>
				<TimerRectangle>{time[2]}</TimerRectangle>
			</View>
			<View style={styles.tasksBlock}>
				<Text style={styles.taskH1}>Tasks List</Text>
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
		</View>
	);
};

const styles = StyleSheet.create({
	listWrapper: {
		height: 279,
		width: 329,
		shadowColor: '#000',
		shadowOpacity: 0.25,
		shadowRadius: 10,
		backgroundColor: '#FFF',
		shadowOffset: {
			width: 4,
			height: 0,
		},
		borderRadius: 10,
	},
	listContent: {
		paddingLeft: 30,
		paddingRight: 27,
		paddingBottom: 25,
	},
	viewTaskContainer: {
		width: 329,
		backgroundColor: '#FFF',
		borderRadius: 15,
	},
	container: {
		padding: 0,
		justifyContent: 'flex-start',
	},
	headerContainer: {
		height: 250,
		backgroundColor: '#FFD615',
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 15,
	},
	logo: {
		marginTop: 45,
		marginRight: 21,
		alignSelf: 'flex-end',
	},
	timer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 42,
	},
	text: {
		fontFamily: 'Poppins-Medium',
		fontWeight: '700',
		fontSize: 64,
		alignSelf: 'center',
		marginHorizontal: 10,
	},
	tasksBlock: {
		marginTop: 43,
	},
	taskH1: {
		fontFamily: 'Poppins-Medium',
		fontWeight: '700',
		fontSize: 18,
		lineHeight: 27,
		marginBottom: 29,
	},
	tasksHeaderBlock: {
		display: 'flex',
		marginBottom: 16,
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tasksHeader: {
		fontFamily: 'Poppins-Medium',
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 27,
	},
});
export default HomePage;
