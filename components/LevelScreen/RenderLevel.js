import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState, useContext} from 'react';
import {QuizzContext} from '../../store/app_context';

const RenderLevel = ({level}) => {
  const {quizzEasy, quizzNormal, quizzHard} = useContext(QuizzContext);
  const [levelData, setLevelData] = useState([]);
  
  useEffect(() => {
    const getThisLevelData = () => {
      try {
        if (level === 'easy') {
          setLevelData(quizzEasy);
          console.log('this is EASY LEVEL');
        }
        if (level === 'normal') {
          setLevelData(quizzNormal);
          console.log('this is NORMAL LEVEL');
        }
        if (level === 'hard') {
          setLevelData(quizzHard);
          console.log('this is HARD LEVEL');
        }
      } catch (error) {
        console.log('data fetching error', error);
      }
    };

    getThisLevelData();
  }, [level, quizzEasy, quizzNormal, quizzHard]);

  return (
    <View>
      <Text>{level} RenderLevel</Text>
    </View>
  );
};

export default RenderLevel;

const styles = StyleSheet.create({});
