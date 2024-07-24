import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants/colors';
import {
  fontSizeCorrection,
  marginVerticalCorrection,
} from '../Styles/generalStyles';
import {LockIcon} from '../ui';

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
      {levelDisable && (
        <View style={styles.lockContainer}>
          <LockIcon />
        </View>
      )}
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
  btnStyle: {
    marginVertical: marginVerticalCorrection(),
    padding: 10,
    borderRadius: 8,
    paddingVertical: 20,
    position: 'relative',
  },
  text: {
    color: COLORS.blossom,
    fontSize: fontSizeCorrection(),
    textAlign: 'center',
    fontWeight: '800',
  },
  lockContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    top: 10,
  },
});
