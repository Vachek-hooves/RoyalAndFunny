import {StyleSheet, Text, View} from 'react-native';
import {ScoreIcon} from '../ui';
import {COLORS} from '../constants/colors';

const QuizzLevelScore = ({score}) => {
  return (
    <View style={styles.container}>
      <ScoreIcon />
      <Text style={styles.text}>{score}</Text>
    </View>
  );
};

export default QuizzLevelScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    backgroundColor: COLORS.bamboo,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 24,
    color: COLORS.mainBg,
    fontWeight: '800',
  },
});
