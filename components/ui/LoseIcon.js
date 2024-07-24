import {View, Image} from 'react-native';

const LoseIcon = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../assets/ui/loser.png')}
        style={{width: 90, height: 90}}
      />
    </View>
  );
};

export default LoseIcon;
