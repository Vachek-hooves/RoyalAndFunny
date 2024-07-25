import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 50, right: 40}}
      onPress={() => navigation.navigate('ProfileScreen')}>
      <Image
        source={require('../../assets/ui/user.png')}
        style={{width: 50, height: 50, tintColor: COLORS.blossom}}
      />
    </TouchableOpacity>
  );
};

export default ProfileIcon;
