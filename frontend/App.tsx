import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import WelcomeGreeting from './pages/WelcomeGreeting';
import Emotion from './pages/Emotion'; 
import CheckOutScreen from './pages/CheckOutScreen';
import CheckOutGreeting from './pages/CheckOutGreeting';
import CheckInScreen from './pages/CheckInScreen';
import Feedback from './pages/Feedback';
import { getCurrentDateTime } from './utils/dateTimeUtils'; // Import the function
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const MainApp = ({ navigation }) => {
  const [location, setLocation] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync(location.coords);
      setLocation(reverseGeocode[0].city);
    })();
  }, []);

  const dateTimeString = getCurrentDateTime();
  const [time, period, day, month] = dateTimeString.split(' ');

  return (
    <>
      <Header getCurrentDateTime={getCurrentDateTime}>
      <CheckInScreen 
          navigation={navigation} 
          time={time} 
          period={period} 
          day={day} 
          month={month} 
          location={location} 
        />
        </Header>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="App" component={MainApp} />
        <Stack.Screen name="CheckInScreen" component={CheckInScreen}/>
        <Stack.Screen name="WelcomeGreeting" component={WelcomeGreeting} />
        <Stack.Screen name="Emotion" component={Emotion} />
        <Stack.Screen name="CheckOutScreen" component={CheckOutScreen}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="CheckOutGreeting" component={CheckOutGreeting}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;