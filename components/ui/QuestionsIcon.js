import {View, Image} from 'react-native';
import {COLORS} from '../constants/colors';

const QuestionsIcon = () => {
  return (
    <View>
      <Image
        source={require('../../assets/ui/question.png')}
        style={{width: 20, height: 20, tintColor: COLORS.darkGreen}}
      />
    </View>
  );
};

export default QuestionsIcon;
