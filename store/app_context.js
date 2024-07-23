import {createContext, useEffect, useState} from 'react';
import {
  saveQuizzLevel,
  fetchQuizzLevel,
  saveGameScore,
  getGameScore,
} from './utils';
import {QUIZZ_DATA} from '../data/quizzData';

const initialScore = [
  {level: 'easy', score: 0},
  {level: 'normal', score: 0},
  {level: 'hard', score: 0},
];

export const QuizzContext = createContext({
  quizzEasy: [],
  quizzNormal: [],
  quizzHard: [],
  gameScore: [],
  getLevelData: level => [],
  activeNextLevelHandler: (id, level) => [],
  setScoreHandler: () => [],
  updateGameScore: () => [],
});

export const AppProvider = ({children}) => {
  const [quizzEasy, setQuizzEasy] = useState([]);
  const [quizzNormal, setQuizzNormal] = useState([]);
  const [quizzHard, setQuizzHard] = useState([]);
  const [gameScore, setGameScore] = useState([]);

  useEffect(() => {
    const initializeData = async () => {
      try {
        let easy = await fetchQuizzLevel('easy');
        // console.log('Fetched easy level data:', easy);
        let normal = await fetchQuizzLevel('normal');
        // console.log('Fetched normal level data:', normal);
        let hard = await fetchQuizzLevel('hard');
        // console.log('Fetched hard level data:', hard);

        if (easy.length === 0) {
          await saveQuizzLevel(QUIZZ_DATA, 'easy');
          easy = await fetchQuizzLevel('easy');
        }
        setQuizzEasy(easy);

        if (normal.length === 0) {
          await saveQuizzLevel(QUIZZ_DATA, 'normal');
          normal = await fetchQuizzLevel('normal');
        }
        setQuizzNormal(normal);

        if (hard.length === 0) {
          await saveQuizzLevel(QUIZZ_DATA, 'hard');
          hard = await fetchQuizzLevel('hard');
        }
        setQuizzHard(hard);
      } catch (error) {
        console.log('INITILIAZING DATA ERROR');
      }
    };
    initializeData();
    initGameScore();
  }, []);

  const initGameScore = async () => {
    try {
      let scoreData = await getGameScore('score');
      if (scoreData.length === 0) {
        console.log(initialScore);
        await saveGameScore(initialScore);
      }
      setGameScore(scoreData);
    } catch (error) {
      console.log('INITILIAZING DATA ERROR');
    }
  };

  const updateGameScore = async level => {
    console.log('context fn', level);
    try {
      // console.log(gameScore);
    } catch (error) {}
  };

  const getLevelData = level => {
    switch (level) {
      case 'easy':
        return quizzEasy;
      case 'normal':
        return quizzNormal;
      case 'hard':
        return quizzHard;
      default:
        return [];
    }
  };

  const activeNextLevelHandler = async (id, level) => {
    try {
      const currentQuizz = getLevelData(level);
      // console.log(currentQuizz);
      const currentQuizzIndex = currentQuizz.findIndex(
        quizz => quizz.id === id,
      );
      if (
        currentQuizzIndex !== -1 &&
        currentQuizzIndex + 1 < currentQuizz.length
      ) {
        const updatedQuizz = currentQuizz.map((quizz, index) =>
          index === currentQuizzIndex + 1 ? {...quizz, isActive: true} : quizz,
        );
        switch (level) {
          case 'easy':
            setQuizzEasy(updatedQuizz);
            break;
          case 'normal':
            setQuizzNormal(updatedQuizz);
            break;
          case 'hard':
            setQuizzHard(updatedQuizz);
            break;
          default:
            break;
        }

        // console.log(level, updatedQuizz);
        await saveQuizzLevel(updatedQuizz, level);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const setScoreHandler = async (level, points) => {
  //   console.log(level, points);
  // };

  const value = {
    quizzEasy,
    quizzNormal,
    quizzHard,
    getLevelData,
    activeNextLevelHandler,
    // setScoreHandler,
    gameScore,
    updateGameScore,
  };
  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};
