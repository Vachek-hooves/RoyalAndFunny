import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../components/constants/colors';
import {appStyles} from '../components/Styles/generalStyles';

const MainScreen = ({navigation}) => {
  return (
    <View style={appStyles.screenStyle}>
      <SafeAreaView style={{gap: 5}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('GameScreen')}
          style={styles.topBtn}>
          <Text style={styles.text}>GAME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('StatuteScreen')}
          style={styles.bottomBtn}>
          <Text style={styles.text}>RULES</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    color: COLORS.blossom,
    fontSize: 60,
    textAlign: 'center',
  },
  bottomBtn: {
    borderWidth: 3,
    borderEndEndRadius: 90,
    borderEndStartRadius: 90,
    padding: 40,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    borderColor: COLORS.blossom,
    backgroundColor: COLORS.tuna,
  },
  topBtn: {
    borderWidth: 3,
    padding: 40,
    borderColor: COLORS.blossom,
    backgroundColor: COLORS.tuna,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90,
  },
});
