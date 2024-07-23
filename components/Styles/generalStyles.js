import {COLORS} from '../constants/colors';
import {Dimensions} from 'react-native';

export const appStyles = {
  screenStyle: {
    backgroundColor: COLORS.mainBg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const {width, height} = Dimensions.get('window');

export const fontSizeCorrection = () => {
  if (height < 670) {
    return 30;
  } else {
    return 34;
  }
};

export const marginVerticalCorrection = () => {
  if (height < 670) {
    return 20;
  } else {
    return 30;
  }
};

export const fontSizeQuiestionCorrection = () => {
  if (height < 670) {
    return 24;
  } else {
    return 28;
  }
};

export const questionContainerHeightCorrection = () => {
  if (height < 670) {
    return 180;
  } else {
    return 220;
  }
};

export const optionsNextGapCorrection = () => {
  if (height < 670) {
    return 25;
  } else {
    return 50;
  }
};

export const fontSizeOptionsCorrection = () => {
  if (height < 670) {
    return 22;
  } else {
    return 26;
  }
};

export const optionsHeightCorrection=()=>{
  if (height < 670) {
    return 70;
  } else {
    return 90;
  }
}