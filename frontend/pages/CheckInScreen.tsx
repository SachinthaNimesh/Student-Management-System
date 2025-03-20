// replace hardcoded student id
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getCurrentDateTime } from '../utils/dateTimeUtils';
import * as Location from 'expo-location';
import { postCheckinById } from '../api/attendanceService';

type CheckInScreenProps = {
  navigation: StackNavigationProp<any, any>;
  time: string;
  period: string;
  day: string;
  month: string;
  location: string | null;
};

const CheckInScreen = ({ navigation, time, period, day, month, location }: CheckInScreenProps) => {
  // Use the getCurrentDateTime function if needed
  const dateTimeString = getCurrentDateTime();

  const handleCheckIn = async () => {
    try {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Send check-in data to the backend
      const studentId = 1 //hard coded student id
      await postCheckinById(studentId,latitude, longitude, true);

      Alert.alert('Check-in successful'); // remove this later
      navigation.navigate('WelcomeGreeting');
    } catch (error) {
      Alert.alert('An error occurred during check-in');
    }
  };

  return (
    <View style={styles.checkInFrame}>
      <Text style={styles.checkInText}>Check in</Text>
      <Text style={styles.infoText}>🕑 {time} {period}</Text>
      <Text style={styles.infoText}>📆 {day} {month}</Text>
      <Text style={styles.infoText}>📍 {location || 'Fetching location...'}</Text>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={handleCheckIn}>
        <Text style={styles.btnText}>Check in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkInFrame: {
    width: 374,
    height: 460,
    borderRadius: 18,
    backgroundColor: 'rgba(225, 225, 225, 0.4)', // 50% transparent background
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 250,
    left: '50%',
    transform: [{ translateX: -187 }], // Center horizontally by half the width
  },
  checkInText: {
    fontSize: 43,
    marginLeft: 20,
    marginBottom: 52,
    color: '#000',
    fontFamily: 'Poppins', // Updated font family
    fontWeight: '600', // Updated font weight
  },
  infoText: {
    marginLeft: 20,
    fontSize: 26,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Poppins', // Updated font family
    fontWeight: '600', // Updated font weight
  },
  btn:{
    padding: 10,
    backgroundColor:"#FBFF00",
    width: 263,
    height: 82,
    alignSelf: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.20)',

    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  btnText: {
    fontSize: 27,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  }
});

export default CheckInScreen;