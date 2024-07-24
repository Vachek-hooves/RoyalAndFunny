import {Modal, SafeAreaView, View} from 'react-native';
import {useState, useContext, useEffect} from 'react';
import {
  QuizzNextBtn,
  QuizzOptions,
  QuizzQuestion,
  QuizzStatistic,
} from '../components/QuizzScreen';
import {QuizzContext} from '../store/app_context';
import {GameTimer} from '../components/ui';
import {useNavigation} from '@react-navigation/native';
import {optionsNextGapCorrection} from '../components/Styles/generalStyles';
import {COLORS} from '../components/constants/colors';
import QuizzModal from './QuizzModal';

const QuizzScreen = ({route}) => {
  const navigation = useNavigation();
  const {level, id} = route.params;
  const {
    getLevelData,
    activeNextLevelHandler,
    setScoreHandler,
    gameScore,
    updateGameScore,
  } = useContext(QuizzContext);
  const data = getLevelData(level);
  console.log(gameScore);

  const allQuestions =
    data?.find(quizz => quizz.id === id)?.levelQuestions || [];

  const [presentQuestionIndex, setPresentQuestionIndex] = useState(0);
  const [presentOption, setPresentOption] = useState(null);
  const [trueOption, setTrueOption] = useState(null);
  const [offOption, setOffOption] = useState(false);
  const [points, setPoints] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [levelIsCompleted, setLevelIsCompleted] = useState(false);
  const [timeOut, setTimeOut] = useState(false);

  function timeIsOver() {
    console.log('TIME IS OVER YOU ARE LOOOOOOSER');
    setOpenModal(true);
  }

  useEffect(() => {
    if (timeOut) {
      timeIsOver();
    }
  }, [timeOut]);

  const activeNextLevel = () => {
    activeNextLevelHandler(id, level);
    navigation.navigate('LevelScreen', {level});
  };

  function navigateToQuizzLevel() {
    navigation.navigate('LevelScreen', {level});
  }

  // const setScore = () => {
  //   setScoreHandler(level, points);
  // };

  const checkIsValid = selectedOption => {
    // console.log(presentQuestionIndex, allQuestions.length - 1);
    const rightOption = allQuestions[presentQuestionIndex]['answer'];
    setPresentOption(selectedOption);
    setTrueOption(rightOption);
    setOffOption(true);
    if (selectedOption === rightOption) {
      setPoints(points + 1);
    }
    setNextBtn(true);
  };

  const showNextQuestion = () => {
    if (presentQuestionIndex == allQuestions.length - 1) {
      // console.log('LEVEL COMPLETED');
      updateGameScore(level);
      setOpenModal(true);
      setLevelIsCompleted(true);
    } else {
      setPresentQuestionIndex(presentQuestionIndex + 1);
      setPresentOption(null);
      setTrueOption(null);
      setOffOption(false);
      setNextBtn(false);
    }
  };

  const restartThisLevel = () => {
    console.log('RESTART');
    setOpenModal(false);
    setPresentQuestionIndex(0);
    setPresentOption(null);
    setTrueOption(null);
    setPoints(0);
    setOffOption(false);
    setNextBtn(false);
  };

  return (
    <View style={{backgroundColor: COLORS.mainBg, flex: 1, padding: 10}}>
      <SafeAreaView>
        <QuizzStatistic
          level={level}
          score={points}
          totalQuestions={allQuestions.length}
          currentQuestion={presentQuestionIndex + 1}
        />
        <View>
          {(level === 'normal' || level === 'hard') && (
            <GameTimer
              setTimeOut={setTimeOut}
              time={level === 'normal' ? 120 : 90}
            />
          )}
          <QuizzQuestion
            question={allQuestions[presentQuestionIndex]?.question}
          />
        </View>
        <View style={{gap: optionsNextGapCorrection()}}>
          <QuizzOptions
            options={allQuestions[presentQuestionIndex]?.options}
            onPress={checkIsValid}
            idDisabled={offOption}
            trueOption={trueOption}
            presentOption={presentOption}
          />
          {nextBtn && <QuizzNextBtn onPress={showNextQuestion} />}
        </View>
        <Modal visible={openModal} animationType="slide" transparent={true}>
          <QuizzModal
            level={level}
            score={points}
            reset={() => restartThisLevel()}
            activeNextLevel={activeNextLevel}
            toMenu={navigateToQuizzLevel}></QuizzModal>
        </Modal>
        {/* <TouchableOpacity onPress={setScore}>
        <Text style={{fontSize: 22, color: 'gray'}}>Save score</Text>
      </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

export default QuizzScreen;
