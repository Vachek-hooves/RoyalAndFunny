import {FlatList, StyleSheet, Text, View} from 'react-native';
import LevelItem from './LevelItem';
// import {useEffect, useState, useContext} from 'react';
import useQuizzLevel from './useQuizzLevel';
// import {QuizzContext} from '../../store/app_context';
// import {appStyles} from '../components/Styles/generalStyles';

const RenderLevel = ({level}) => {
  //   const {quizzEasy, quizzNormal, quizzHard} = useContext(QuizzContext);
  //   const [levelData, setLevelData] = useState([]);

  //   useEffect(() => {
  //     const getThisLevelData = () => {
  //       try {
  //         if (level === 'easy') {
  //           setLevelData(quizzEasy);
  //           console.log('this is EASY LEVEL');
  //         }
  //         if (level === 'normal') {
  //           setLevelData(quizzNormal);
  //           console.log('this is NORMAL LEVEL');
  //         }
  //         if (level === 'hard') {
  //           setLevelData(quizzHard);
  //           console.log('this is HARD LEVEL');
  //         }
  //       } catch (error) {
  //         console.log('data fetching error', error);
  //       }
  //     };

  //     getThisLevelData();
  //   }, [level, quizzEasy, quizzNormal, quizzHard]);
  const levelData = useQuizzLevel(level);

  function renderLevelItem({item}) {
    return <LevelItem level={level} item={item} id={item.id} />;
  }

  return (
    <FlatList
      data={levelData}
      keyExtractor={item => item.id}
      renderItem={renderLevelItem}
    />
  );
};

export default RenderLevel;

const styles = StyleSheet.create({});
