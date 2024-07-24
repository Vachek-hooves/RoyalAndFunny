import {StyleSheet, Text, View} from 'react-native';
import QuizzLevelScore from './QuizzLevelScore';
import QuizzLevelRemain from './QuizzLevelRemain';
import {COLORS} from '../constants/colors';

const QuizzStatistic = ({score, totalQuestions, currentQuestion, level}) => {
  const LEVEL = level.toUpperCase();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <QuizzLevelScore score={score} />
      </View>
      <View>
        <Text style={{color: COLORS.bamboo, fontSize: 20, fontWeight: '700'}}>
          {LEVEL}
        </Text>
      </View>
      <View style={styles.subContainer}>
        <QuizzLevelRemain
          totalQuestions={totalQuestions}
          currentQuestion={currentQuestion}
        />
      </View>
    </View>
  );
};

export default QuizzStatistic;

const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row', gap: 10, marginVertical: 5},
  subContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
