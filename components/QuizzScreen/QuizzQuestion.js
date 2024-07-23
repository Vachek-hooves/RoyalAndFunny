import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/colors';
import {
  fontSizeQuiestionCorrection,
  questionContainerHeightCorrection,
} from '../Styles/generalStyles';

const QuizzQuestion = ({question}) => {
  return (
    <View style={{height: questionContainerHeightCorrection()}}>
      <View
        style={{
          marginTop: 20,
          // backgroundColor: COLORS.nevada,
          borderRadius: 8,
          backgroundColor: COLORS.gulfStream,
        }}>
        <Text
          style={{
            fontSize: fontSizeQuiestionCorrection(),
            color: COLORS.clay,
            textAlign: 'center',
          }}>
          {question}
        </Text>
      </View>
    </View>
  );
};

export default QuizzQuestion;

const styles = StyleSheet.create({});
