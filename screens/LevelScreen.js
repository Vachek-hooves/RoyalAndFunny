import {SafeAreaView} from 'react-native';
import {RenderLevel} from '../components/LevelScreen';
import {COLORS} from '../components/constants/colors';
import RestartIcon from '../components/ui/RestartIcon';

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
      <RestartIcon level={level} />
    </SafeAreaView>
  );
};

export default LevelScreen;
