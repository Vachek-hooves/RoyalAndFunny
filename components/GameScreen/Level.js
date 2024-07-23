import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';

const Level = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Level;
const styles = StyleSheet.create({
  btn: {
    borderWidth: 3,
    padding: 25,
    borderRadius: 8,
    borderColor: COLORS.bamboo,
    backgroundColor: COLORS.tuna,
    marginVertical: 30,
    width: '80%',
  },
  text: {
    color: COLORS.blossom,
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '800',
  },
});
