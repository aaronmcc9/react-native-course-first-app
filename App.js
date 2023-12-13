import { StyleSheet, FlatList, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { Fragment, useState } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);

    endAddGoalHandler();
  };

  function onDeleteItemHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(cg => cg.key !== id)
    })
  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <Fragment>

      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler} />

        {modalIsVisible && <GoalInput showModal={modalIsVisible}
          onCancel={endAddGoalHandler}
          onAddGoal={addGoalHandler} />}

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return (
              <GoalItem text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={onDeleteItemHandler} />
            )
          }}>
          </FlatList>
        </View>
      </View>
    </Fragment>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});
