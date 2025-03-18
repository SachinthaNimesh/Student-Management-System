import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { useFonts } from 'expo-font'; 
import { getCurrentDateTime } from '../utils/dateTimeUtils';
import { getStudentById } from '../api/studentService';
import { Student } from '../types/student';

const ProfilePicture = require('../assets/user.jpg');
const PlaceholderImage = require('../assets/bg2.jpg');

interface HeaderProps {
  children: React.ReactNode;
  getCurrentDateTime: () => string;
}

const Header: React.FC<HeaderProps> = ({ children, getCurrentDateTime }) => {
  const [student, setStudent] = React.useState<Student | null>(null);
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-SemiBold.ttf'), // Load custom font
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const student = await getStudentById(1);
        setStudent(student);
      } catch (error) {
        console.error('Failed to fetch student:', error);
      }
    };

    fetchStudent();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar style="auto" />
      <ImageBackground source={PlaceholderImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>Hi, {student ? student.first_name : 'Loading...'} 👋</Text>
          <Text style={styles.date_time}>{getCurrentDateTime()}</Text>
          <Image source={ProfilePicture} style={styles.profilePicture} />
          {children}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

Header.defaultProps = {
  getCurrentDateTime: () => new Date().toLocaleString(),
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Montserrat', 
    fontWeight: '900',
    position: 'absolute',
    left: 26,
    top: 34,
  },
  date_time: {
    color: '#888888',
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Montserrat', // Apply custom font
    position: 'absolute',
    left: 26,
    top: 70,
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 100,
    position: 'absolute',
    left: 310,
    top: 28.25,
  },
});

export default Header;