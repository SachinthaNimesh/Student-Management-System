import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getCurrentDateTime } from '../utils/dateTimeUtils';

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

  return (
    <View style={styles.checkInFrame}>
      <Text style={styles.checkInText}>Check in</Text>
      <Text style={styles.infoText}>🕑 {time} {period}</Text>
      <Text style={styles.infoText}>📆 {day} {month}</Text>
      <Text style={styles.infoText}>📍 {location || 'Fetching location...'}</Text>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => {
          navigation.navigate('WelcomeGreeting'); 
        }}>
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