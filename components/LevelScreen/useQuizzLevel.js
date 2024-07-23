import {useContext, useEffect, useState} from 'react';
import {QuizzContext} from '../../store/app_context';

const useQuizzLevel = level => {
  const {quizzEasy, quizzNormal, quizzHard} = useContext(QuizzContext);
  const [levelData, setLevelData] = useState([]);

  useEffect(() => {
    const getThisLevelData = () => {
      try {
        if (level === 'easy') {
          setLevelData(quizzEasy);
          // console.log('this is EASY LEVEL');
        }
        if (level === 'normal') {
          setLevelData(quizzNormal);
          // console.log('this is NORMAL LEVEL');
        }
        if (level === 'hard') {
          setLevelData(quizzHard);
          // console.log('this is HARD LEVEL');
        }
      } catch (error) {
        console.log('data fetching error', error);
      }
    };

    getThisLevelData();
  }, [level, quizzEasy, quizzNormal, quizzHard]);
  return levelData;
};

export default useQuizzLevel;
