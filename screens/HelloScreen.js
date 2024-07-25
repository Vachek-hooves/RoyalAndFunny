import {StyleSheet, Text, View, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {COLORS} from '../components/constants/colors';
import {appStyles} from '../components/Styles/generalStyles';

const HelloScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [animation]);

  return (
    <View style={appStyles.screenStyle}>
      <Animated.View style={[{opacity: animation}, styles.subContainer]}>
        <Text style={styles.text}>Here you are! </Text>
        <Text style={styles.text}>You are</Text>
        <Text style={styles.text}>WELCOME TO</Text>
        <Text style={styles.quizText}>Royal and Funny Literary Quiz!</Text>
      </Animated.View>
    </View>
  );
};

export default HelloScreen;

const styles = StyleSheet.create({
  subContainer: {
    // fontSize: 62,
    marginVertical: 15,
    gap: 20,
  },
  text: {
    fontWeight: '800',
    color: COLORS.blossom,
    fontSize: 30,
    textAlign: 'center',
  },
  quizText: {
    fontWeight: '800',
    color: COLORS.blossom,
    fontSize: 42,
    textAlign: 'center',
  },
});
