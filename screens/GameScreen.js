import {SafeAreaView} from 'react-native';
import {Level} from '../components/GameScreen';
import {appStyles} from '../components/Styles/generalStyles';
import {ReturnIcon} from '../components/ui';

const GameScreen = ({navigation}) => {
  function navigateLevel(level) {
    navigation.navigate('LevelScreen', {level});
  }

  return (
    <SafeAreaView style={appStyles.screenStyle}>
      <Level text="EASY" onPress={() => navigateLevel('easy')} />
      <Level text="NORMAL" onPress={() => navigateLevel('normal')} />
      <Level text="HARD" onPress={() => navigateLevel('hard')} />
      <ReturnIcon />
    </SafeAreaView>
  );
};

export default GameScreen;
