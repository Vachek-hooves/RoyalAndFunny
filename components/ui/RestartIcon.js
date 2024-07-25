import {Image, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../constants/colors';
import {useContext} from 'react';
import {QuizzContext} from '../../store/app_context';

const RestartIcon = ({level}) => {
  const {resetLevelHandler} = useContext(QuizzContext);
  function restartLevel() {
    resetLevelHandler(level);
  }

  return (
    <TouchableOpacity
      onPress={restartLevel}
      style={{
        alignItems: 'flex-end',
        marginTop: 25,
        marginBottom: 20,
        width: '100%',
        marginRight: 100,
      }}>
      <Image
        source={require('../../assets/ui/undo.png')}
        style={{width: 60, height: 60, tintColor: COLORS.blossom}}
      />
      {/* <Text style={{position: 'absolute', top: 30,right:25}}>reset</Text> */}
    </TouchableOpacity>
  );
};

export default RestartIcon;
