import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/colors';

const QuizzNextBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>Next Question</Text>
    </TouchableOpacity>
  );
};

export default QuizzNextBtn;

const styles = StyleSheet.create({
  btn: {borderRadius: 10, backgroundColor: COLORS.bamboo, padding: 10},
  text: {textAlign: 'center', fontSize: 26, color: COLORS.nile},
});
