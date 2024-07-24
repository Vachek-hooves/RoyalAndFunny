import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../constants/colors';

const LockIcon = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../assets/ui/lock.png')}
        style={{width: 50, height: 50, tintColor: COLORS.blossom}}
      />
    </View>
  );
};

export default LockIcon;

const styles = StyleSheet.create({});
