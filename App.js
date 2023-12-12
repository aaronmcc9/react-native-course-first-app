import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredtext) {
    setEnteredGoalText(enteredtext)
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  };

  return (

    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'
          onChangeText={goalInputHandler}>
        </TextInput>
        <Button title="Add Goal"
          onPress={addGoalHandler}>
        </Button>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, idx) =>
          <Text key={goal + "_" + idx}>
            {goal}
          </Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottomBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
