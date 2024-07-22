import {StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react';
import {QuizzContext} from '../store/app_context';

const MainScreen = () => {
  const {quizzEasy, quizzNormal, quizzHard} = useContext(QuizzContext);
  console.log('MAIN SCREEN --',quizzEasy)

  return (
    <View>
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
