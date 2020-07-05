import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';


const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const addGoalHandler = (goalInput) => {
    if (!goalInput.trim().length) { return }
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalInput }]);
    setShowModal(false)
  }

  const cancelAddItem = () => { setShowModal(false) }
  const filterGoals = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        return goal.id !== id
      })
    })
  }

  const ShowModalToAddItem = () => {
    setShowModal(true)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...styles.container }} >
        <StatusBar
          backgroundColor="red"
          barStyle="dark-content"
        />

        <Button title='Add Item' onPress={ShowModalToAddItem} />
        <View>
          <GoalInput addGoalHandler={addGoalHandler} showModal={showModal} cancelAddItem={cancelAddItem} />
        </View>
        <View style={{ ...styles.listView }}>
          <FlatList showsVerticalScrollIndicator={false} data={courseGoals} keyExtractor={(goal, index) => goal.id} renderItem={({ item }) => <GoalItem onDeleteItem={filterGoals} item={item} />} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120
  },
  inp: {
    borderWidth: 1,
    borderColor: 'gray',
    width: Dimensions.get('window').width * 0.7,
    fontSize: 25,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    marginTop: -5
  },
  listView: {
    padding: 10,
    width: Dimensions.get('window').width * 0.95,
  }

});

export default App;
