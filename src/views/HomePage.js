import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ellipses from '../components/Ellipses/Ellipses';
import LogOutIcon from '../components/LogOutIcon/LogOutIcon';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import TimerRectangle from '../components/TimerRectangle/TimerRectangle';
import PlusIcon from '../components/PlusIcon/PlusIcon';
import Task from '../components/Task/Task';
import uuid from 'react-native-uuid';
import { cache } from '../components/App/app';

const HomePage = ({ route, navigation }) => {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 55,
    seconds: 55,
  });

  const [userData, setUserData] = useState({});

  const { email } = route.params;

  useEffect(() => {
    onLoadTodo(email);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      setTime((state) => ({
        hours,
        minutes,
        seconds,
      }));
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
      const userData = await cache.get(email);
      const data = JSON.parse(userData);
      setUserData((state) => data);
    } catch (error) {
      Alert.alert('error', 'Something went wrong');
    }
  };

  const onComplete = (id) => {
    const tasksArr = userData.tasks;

    const filteredTasks = tasksArr.map((task) => {
      let someTask = task;
      if (someTask.id === id) {
        someTask.comp = !someTask.comp;

        console.log(task.id, id);
      }
      return someTask;
    });

    setUserData((state) => ({
      ...state,
      tasks: [...filteredTasks],
    }));
    //  setUserData((state) => ({ ...state, tasks: [...filteredTasks] }));
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
    await cache.set(email, JSON.stringify(userData));
  };

  const addTodoHadler = (text) => {
    setUserData((state) => ({
      ...state,
      tasks: [...state.tasks, { id: state.tasks.length, key: uuid.v4(), text, comp: false }],
    }));
  };

  const renderTodos = (data) => {
    if (data && data.length === 0) return <Text>No Tasks</Text>;

    return data?.map(({ text, comp, key, id }, i, arr) => {
      let task;
      i == arr.length - 1
        ? (task = <Task id={id} onComplete={onComplete} key={key} comp={comp} name={text} last />)
        : (task = <Task id={id} onComplete={onComplete} key={key} comp={comp} name={text} />);
      return task;
    });
  };

  const todos = renderTodos(userData.tasks);
  return (
    <View style={[mainStyles.container, { flex: 1, padding: 0, justifyContent: 'flex-start' }]}>
      <Ellipses home={true} />
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <LogOutIcon onPress={onLogout} />
        </View>
        <Image
          style={styles.image}
          source={require(// @ts-ignore
          '../assets/images/Andrew.png')}
        />
        <Text style={textStyles.header}>Welcome {userData.name}</Text>
      </View>
      <View style={styles.timer}>
        <TimerRectangle>{time.hours}</TimerRectangle>
        <View>
          <Text style={styles.text}>:</Text>
        </View>
        <TimerRectangle>{time.minutes}</TimerRectangle>
        <View>
          <Text style={styles.text}>:</Text>
        </View>
        <TimerRectangle>{time.seconds}</TimerRectangle>
      </View>
      <View style={styles.tasksBlock}>
        <Text style={styles.taskH1}>Tasks List</Text>
        <View style={styles.viewTaskContainer}>
          <ScrollView
            bounces={false}
            scrollIndicatorInsets={{ right: 33 }}
            style={[styles.tasksContainer, {}]}>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.tasksHeader}>Daily Tasks</Text>
                <View>
                  <PlusIcon onPress={addToDo} />
                </View>
              </View>
            </View>
            {todos}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: -9,
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
  },
  viewTaskContainer: {
    marginTop: 29,
    marginBottom: 29,
    width: 325,
    height: 279,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    borderRadius: 15,
  },
  tasksContainer: {
    width: 325,
    height: 279,
    borderRadius: 15,
    backgroundColor: '#FFF',

    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 24,
    paddingBottom: 40,
  },
  lastTask: { marginBottom: 500 },
  tasksHeader: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    paddingBottom: 18,
  },

  taskText: {},
});
export default HomePage;
