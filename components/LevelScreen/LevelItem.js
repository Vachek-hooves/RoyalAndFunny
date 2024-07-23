import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants/colors';
import {
  fontSizeCorrection,
  marginVerticalCorrection,
} from '../Styles/generalStyles';

const LevelItem = ({level, item, id}) => {
  const navigation = useNavigation();

  function navigateToQuizz() {
    navigation.navigate('QuizzScreen', {level, id});
  }
  const levelDisable = !item.isActive;

  return (
    <TouchableOpacity
      disabled={levelDisable}
      onPress={navigateToQuizz}
      style={[
        styles.btnStyle,
        {
          backgroundColor: COLORS.tuna,
          borderColor: levelDisable ? COLORS.slateGray + 40 : COLORS.bamboo,
          borderWidth: levelDisable ? 3 : 5,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {color: levelDisable ? COLORS.bamboo + 40 : COLORS.blossom},
        ]}>
        {item.topic}
      </Text>
    </TouchableOpacity>
  );
};

export default LevelItem;

const styles = StyleSheet.create({
  text: {
    color: COLORS.blossom,
    fontSize: fontSizeCorrection(),
    textAlign: 'center',
    fontWeight: '800',
  },
  btnStyle: {
    marginVertical: marginVerticalCorrection(),
    padding: 15,
    borderRadius: 8,
    paddingVertical: 20,
  },
});
