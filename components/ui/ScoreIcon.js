import {Image, View} from 'react-native';
import {COLORS} from '../constants/colors';

const ScoreIcon = () => {
  return (
    <View>
      <Image
        source={require('../../assets/ui/correct.png')}
        style={{width: 30, height: 30, tintColor: COLORS.darkGreen}}
      />
    </View>
  );
};

export default ScoreIcon;
