import {StyleSheet, View} from 'react-native';
import QuizzLevelScore from './QuizzLevelScore';
import QuizzLevelRemain from './QuizzLevelRemain';

const QuizzStatistic = ({score, totalQuestions, currentQuestion}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <QuizzLevelScore score={score} />
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
