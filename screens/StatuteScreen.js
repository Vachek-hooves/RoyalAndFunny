import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../components/Styles/generalStyles';

const StatuteScreen = () => {
  return (
    <SafeAreaView style={appStyles.screenStyle}>
      <ScrollView>
        <Text>StatuteScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatuteScreen;

const styles = StyleSheet.create({});
