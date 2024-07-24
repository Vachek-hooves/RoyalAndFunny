import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {
  fontSizeOptionsCorrection,
  optionsHeightCorrection,
} from '../Styles/generalStyles';

const QuizzOptions = ({
  options,
  onPress,
  idDisabled,
  trueOption,
  presentOption,
}) => {
  return (
    <View style={styles.rootContainer}>
      {options?.map((option, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(option)}
            disabled={idDisabled}
            style={[
              styles.optionContainer,
              {
                backgroundColor:
                  option == trueOption
                    ? COLORS.green
                    : option == presentOption
                    ? COLORS.lightRed
                    : COLORS.mainBg,
                borderColor:
                  option == trueOption
                    ? COLORS.darkGreen
                    : option == presentOption
                    ? COLORS.red
                    : COLORS.bamboo,
                borderWidth:
                  option == trueOption ? 5 : option == presentOption ? 5 : 3,
                height: optionsHeightCorrection(),
              },
            ]}>
            <Text
              style={[
                styles.optionText,
                {fontSize: fontSizeOptionsCorrection()},
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default QuizzOptions;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.gulfStream,
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  optionContainer: {
    marginVertical: 10,
    backgroundColor: COLORS.mainBg,
    borderRadius: 8,
    // padding: 10,
    borderWidth: 2,
    borderColor: COLORS.bamboo,

    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  optionText: {
    textAlign: 'center',
    // color: COLORS.bayox,
    fontWeight: '800',
    color: '#A94438',
  },
});
