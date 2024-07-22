import {SafeAreaView} from 'react-native';
import {Level} from '../components/GameScreen';

const GameScreen = ({navigation}) => {
  function navigateLevel(level) {
    navigation.navigate('LevelScreen', {level});
  }

  return (
    <SafeAreaView>
      <Level text="EASY" onPress={() => navigateLevel('easy')} />
      <Level text="NORMAL" onPress={() => navigateLevel('normal')} />
      <Level text="HARD" onPress={() => navigateLevel('hard')} />
    </SafeAreaView>
  );
};

export default GameScreen;
