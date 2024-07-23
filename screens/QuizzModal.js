import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../components/constants/colors';
import {LoseIcon} from '../components/ui';

const QuizzModal = ({children, onClose, reset, score, activeNextLevel}) => {
  const isWon = score >= 6 ? true : false;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        {isWon ? <Win /> : <LoseIcon />}
        {isWon ? <Win /> : <Lose />}
        <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 20}}>
          Correct answeres{' '}
          <Text
            style={{color: COLORS.blossom, fontSize: 26, fontWeight: '800'}}>
            {' '}
            {score}
          </Text>
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={reset} style={styles.btn}>
            <Text style={styles.text}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={activeNextLevel} style={styles.btn}>
            <Text style={styles.text}>Next Game</Text>
          </TouchableOpacity>
        </View>
        <View>{children}</View>
      </View>
      {/* <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Text style={styles.text}>Close </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default QuizzModal;

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

export const Win = () => {
  return (
    <Text style={{textAlign: 'center'}}>
      Congratulations, you've completed this quiz
    </Text>
  );
};
export const Lose = () => {
  return (
    <Text style={{textAlign: 'center', fontSize: 23, marginVertical: 20}}>
      You LOOOOOOSE!!
    </Text>
  );
};

export const WinnerIcon = () => {};
