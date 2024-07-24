import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../components/Styles/generalStyles';
import {COLORS} from '../components/constants/colors';

const StatuteScreen = () => {
  return (
    <SafeAreaView style={appStyles.screenStyle}>
      <ScrollView style={{padding: 5}}>
        <Text style={styles.headerText}>Game Rules</Text>
        <Text style={styles.subHeader}>General Rules:</Text>
        <Text style={styles.text}>
          1. The quiz consists of 5 levels, each with 10 questions.
        </Text>
        <Text style={styles.text}>
          2. Players start at first quiz topic, with subsequent levels locked
          until the current level is completed.
        </Text>
        <Text style={styles.text}>
          3. The score for the current quiz is displayed in the top-left corner
          of the screen.
        </Text>
        <Text style={styles.text}>
          4. Correct answers are highlighted in green, while incorrect answers
          are highlighted in red.
        </Text>

        <Text style={styles.subHeader}>Easy Level:</Text>
        <Text style={styles.text}>
          Players have unlimited time to complete the level.
        </Text>
        <Text style={styles.text}>
          If the player makes more than 4 mistakes, current quiz lost.
        </Text>
        <Text style={styles.text}>
          Upon completing the level, players see the scoreboard with their
          results.
        </Text>
        <Text style={styles.subHeader}>Medium Level::</Text>
        <Text style={styles.text}>
          Players have 2 minutes to complete the level. The timer counts down
          and is displayed at the top of the screen.
        </Text>
        <Text style={styles.text}>
          If the player makes more than 4 mistakes, current quiz lost.
        </Text>
        <Text style={styles.text}>
          Upon completing the level, players see the scoreboard with their
          results.
        </Text>
        <Text style={styles.subHeader}>Hard Level:</Text>
        <Text style={styles.text}>
          Players can make up to 2 mistakes before the level is failed.
        </Text>
        <Text style={styles.subHeader}>Starting the Game</Text>
        <Text style={styles.text}>
          When the player clicks "Game," they are presented with 3 levels.
        </Text>
        <Text style={styles.text}>
          Player choose one from "EASY","NORMAL","HARD"
        </Text>

        <Text style={styles.text}>
          The player begins at first, with the next 4 topics locked until the
          current topic is completed.
        </Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatuteScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    color: COLORS.blossom,
    marginBottom: 30,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 22,
    textAlign: 'center',
    color: COLORS.blossom,
  },
  text: {
    marginVertical: 10,
    color: COLORS.albWhite,
    fontSize: 16,
    textAlign: 'center',
  },
});
