import {SafeAreaView} from 'react-native';
import {RenderLevel} from '../components/LevelScreen';
import {appStyles} from '../components/Styles/generalStyles';
import {COLORS} from '../components/constants/colors';

const LevelScreen = ({route}) => {
  const {level} = route.params;

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.nile,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RenderLevel level={level} />
    </SafeAreaView>
  );
};

export default LevelScreen;
