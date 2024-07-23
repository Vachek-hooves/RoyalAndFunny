import {StyleSheet, Text, View} from 'react-native';
import {QuestionsIcon} from '../ui';
import {COLORS} from '../constants/colors';

const QuizzLevelRemain = ({totalQuestions, currentQuestion}) => {
  return (
    <View style={styles.container}>
      <QuestionsIcon />
      <Text style={styles.text}>
        {currentQuestion}/ {totalQuestions}
      </Text>
    </View>
  );
};

export default QuizzLevelRemain;

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
