import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import { getCurrentDateTime } from "../utils/dateTimeUtils";
import { getStudentById } from "../api/studentService";
import { Student } from "../types/student";
import RealTimeClock from "./RealTimeClock ";

const ProfilePicture = require("../assets/user.jpg");
const PlaceholderImage = require("../assets/bg2.jpg");

interface HeaderProps {
  children: React.ReactNode;
  getCurrentDateTime: () => string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  getCurrentDateTime = () => new Date().toLocaleString(),
}) => {
  const [student, setStudent] = React.useState<Student | null>(null);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-SemiBold.ttf"), // Load custom font
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const student = await getStudentById(1);
        setStudent(student);
      } catch (error) {
        console.error("Failed to fetch student:", error);
      }
    };

    fetchStudent();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <SafeAreaView style={[styles.flex, styles.safeArea]}>
      <StatusBar style="auto" />
      <ImageBackground source={PlaceholderImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 20,
              width: "100%",
              position: "absolute",
              top: 0,
            }}
          >
            <View>
              <Text style={styles.text}>
                Hi, {student ? student.first_name : "Loading..."} 👋
              </Text>
              <RealTimeClock/>
            </View>
            <Image source={ProfilePicture} style={styles.profilePicture} />
          </View>
          {children}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// Removed defaultProps as default parameters are now used in the function signature

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    paddingTop: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontFamily: "Montserrat",
    fontWeight: "900",
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
});

export default Header;
