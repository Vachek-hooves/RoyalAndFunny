import {View, Image, TouchableOpacity} from 'react-native';
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
        style={{width: 50, height: 50, tintColor: COLORS.blossom}}
      />
    </TouchableOpacity>
  );
};

export default RestartIcon;
