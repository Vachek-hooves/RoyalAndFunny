import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('GameScreen')}>
          <Text>GAME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StatuteScreen')}>
          <Text>RULES</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
