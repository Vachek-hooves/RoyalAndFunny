import {createContext, useEffect, useState} from 'react';
import {saveQuizzLevel, fetchQuizzLevel} from './utils';
import {QUIZZ_DATA} from '../data/quizzData';

export const QuizzContext = createContext({
  quizzEasy: [],
  quizzNormal: [],
  quizzHard: [],
});

export const AppProvider = ({children}) => {
  const [quizzEasy, setQuizzEasy] = useState([]);
  const [quizzNormal, setQuizzNormal] = useState([]);
  const [quizzHard, setQuizzHard] = useState([]);

  useEffect(() => {
    const initializeData = async () => {
      try {
        let easy = await fetchQuizzLevel('easy');
        let normal = await fetchQuizzLevel('normal');
        let hard = await fetchQuizzLevel('hard');
        if (easy.length === 0) {
          await saveQuizzLevel(QUIZZ_DATA, 'easy');
          easy = await fetchQuizzLevel('easy');
          console.log(easy);
        }
        setQuizzEasy(normal);

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
  }, []);

  const value = {quizzEasy, quizzNormal, quizzHard};
  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};
