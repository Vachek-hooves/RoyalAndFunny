import {View, Image} from 'react-native';

const WinIcon = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../assets/ui/winner.png')}
        style={{width: 120, height: 120}}
      />
    </View>
  );
};

export default WinIcon;
