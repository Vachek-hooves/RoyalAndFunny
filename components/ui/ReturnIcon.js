import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const ReturnIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{position: 'absolute', bottom: 30, right: 50}}
      onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/ui/return.png')}
        style={{width: 50, height: 50, tintColor: COLORS.blossom}}
      />
    </TouchableOpacity>
  );
};

export default ReturnIcon;

const styles = StyleSheet.create({});
