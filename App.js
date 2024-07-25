import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './store/app_context';
import {
  GameScreen,
  HelloScreen,
  LevelScreen,
  MainScreen,
  ProfileScreen,
  QuizzScreen,
  StatuteScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HelloScreen" component={HelloScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="StatuteScreen" component={StatuteScreen} />
          <Stack.Screen name="LevelScreen" component={LevelScreen} />
          <Stack.Screen name="QuizzScreen" component={QuizzScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
