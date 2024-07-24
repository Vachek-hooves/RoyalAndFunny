import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../components/constants/colors';
import {LoseIcon, WinIcon} from '../components/ui';

const QuizzModal = ({
  children,
  reset,
  score,
  activeNextLevel,
  toMenu,
  level,
}) => {
  // const isWon = score >= 6 ? true : false;
  const isWon =
    (level === 'easy' && score >= 6) ||
    (level === 'normal' && score >= 6) ||
    (level === 'hard' && score >= 8);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        {isWon ? <WinIcon /> : <LoseIcon />}
        {isWon ? <Win /> : <Lose level={level} />}
        <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 20}}>
          Correct answeres{' '}
          <Text
            style={{color: COLORS.blossom, fontSize: 26, fontWeight: '800'}}>
            {score}
          </Text>
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={reset} style={styles.btn}>
            <Text style={styles.text}>Reset</Text>
          </TouchableOpacity>
          {isWon ? (
            <TouchableOpacity onPress={activeNextLevel} style={styles.btn}>
              <Text style={styles.text}>Next Game</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={toMenu}>
              <Text style={styles.text}>Level Menu</Text>
            </TouchableOpacity>
          )}
        </View>
        <View>{children}</View>
      </View>
    </View>
  );
};

export const Win = () => {
  return (
    <Text style={{textAlign: 'center', fontSize: 23}}>
      Congratulations, you've completed this quiz
    </Text>
  );
};
export const Lose = ({level}) => {
  const amount = level === 'hard' ? 8 : 6;
  const LEVEL = level.toUpperCase();
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 23, marginVertical: 20}}>
        You LOOOOOOSE!!
      </Text>
      <Text style={{textAlign: 'center', fontSize: 23, marginVertical: 20}}>
        To win in <Text style={{color:COLORS.blossom}}>{LEVEL}</Text> level you should answer on
        <Text style={{color: COLORS.blossom}}> {amount}</Text> or more
        questions.
      </Text>
      <Text style={{textAlign: 'center', fontSize: 23, marginVertical: 20}}>
        Good Luck!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.mainBg,
    padding: 10,
  },
  subContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.gulfStream,
    borderRadius: 10,
    padding: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  btn: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: COLORS.crusta,
    borderColor: COLORS.bamboo,
    borderRadius: 8,
    padding: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  closeBtn: {
    borderWidth: 2,
    backgroundColor: COLORS.crusta,
    borderColor: COLORS.bamboo,
    borderRadius: 8,
    padding: 10,
    width: 100,
  },
});

export default QuizzModal;
