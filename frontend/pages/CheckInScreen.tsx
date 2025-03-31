// replace hardcoded student id
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { getCurrentDateTime } from "../utils/dateTimeUtils";
import * as Location from "expo-location";
import { postCheckinById } from "../api/attendanceService";
const screenWidth = Dimensions.get("window").width;
import { useEffect } from "react";

type CheckInScreenProps = {
  navigation: StackNavigationProp<any, any>;
  time: string;
  period: string;
  day: string;
  month: string;
  location: string | null;
};

const CheckInScreen = ({
  navigation,
  location,
}: CheckInScreenProps) => {
  // Use the getCurrentDateTime function if needed
  const dateTimeString = getCurrentDateTime();
  const [loading, setLoading] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState({
    time: "",
    period: "",
    day: "",
    month: "",
  });
  
  const updateDateTime=()=>{
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2,'0');

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours ? hours:12;

    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
      const month = monthNames[now.getMonth()];setCurrentDateTime({
      time: `${hours}:${minutes}`,
      period,
      day: day.toString(),
      month,
    });
  };

  useEffect(() => {
    // Initial update
    updateDateTime();
    
    // Set interval to update every second
    const intervalId = setInterval(updateDateTime, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleCheckIn = async () => {
    try {
      setLoading(true);
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Send check-in data to the backend
      const studentId = 1; //hard coded student id
      await postCheckinById(studentId, latitude, longitude, true);

      navigation.navigate("WelcomeGreeting");
    } catch (error) {
      Alert.alert("An error occurred during check-in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.checkInFrame}>
      <Text style={styles.checkInText}>Check-in</Text>
      <Text style={styles.infoText}>
        🕑 {currentDateTime.time} {currentDateTime.period}
      </Text>
      <Text style={styles.infoText}>
        📆 {currentDateTime.day} {currentDateTime.month}
      </Text>
      <Text style={styles.infoText}>
        📍 {location || "Fetching location..."}
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={handleCheckIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size={"large"} color={"#000"} />
        ) : (
          <Text style={styles.btnText}>Check in</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  checkInFrame: {
    width: screenWidth - 60,
    height: 460,
    borderRadius: 18,
    backgroundColor: "rgba(225, 225, 225, 0.4)", // 50% transparent background
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    marginHorizontal: 70,
  },
  checkInText: {
    fontSize: 43,
    marginLeft: 20,
    marginBottom: 52,
    color: "#000",
    fontFamily: "Poppins", // Updated font family
    fontWeight: "600", // Updated font weight
  },
  infoText: {
    marginLeft: 20,
    fontSize: 26,
    color: "#000",
    marginBottom: 10,
    fontFamily: "Poppins", // Updated font family
    fontWeight: "600", // Updated font weight
  },
  btn: {
    padding: 10,
    backgroundColor: "#FBFF00",
    width: 263,
    height: 82,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.20)",

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  btnText: {
    fontSize: 27,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
});

export default CheckInScreen;
