import {SafeAreaView} from 'react-native';
import {RenderLevel} from '../components/LevelScreen';

const LevelScreen = ({route}) => {
  const {level} = route.params;

  return (
    <SafeAreaView>
      <RenderLevel level={level} />
    </SafeAreaView>
  );
};

export default LevelScreen;
