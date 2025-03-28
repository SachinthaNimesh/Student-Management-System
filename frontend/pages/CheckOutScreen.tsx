import React, { useState } from "react";
import Header from "../components/Header";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import * as Location from "expo-location";
import { getCurrentDateTime } from "../utils/dateTimeUtils";
import { useNavigation } from "@react-navigation/native";
import { postCheckoutById } from "../api/attendanceService";

const screenWidth = Dimensions.get("window").width;

const CheckOutScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckOut = async () => {
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

      // Send check-out data to the backend
      const studentId = 1; //hard coded student id
      await postCheckoutById(studentId, latitude, longitude);

      navigation.navigate("Feedback");
    } catch (error) {
      Alert.alert("An error occurred during check-out");
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();
  return (
    <>
      <Header
        getCurrentDateTime={getCurrentDateTime}
        children={
          <View style={styles.flexBox}>
            <Image
              source={require("../assets/checkout.png")}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={handleCheckOut}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size={"large"} color={"#000"} />
              ) : (
                <Text style={styles.text}>Checkout</Text>
              )}
            </TouchableOpacity>
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    padding: 10,
    paddingVertical: 25,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: screenWidth - 60,
    borderRadius: 15,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  image: {
    width: 93.66,
    height: 93.65,
  },
  btn: {
    padding: 10,
    margin: 10,
    height: 82,
    width: 263,
    backgroundColor: "#fbff00",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.20)",
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
});

export default CheckOutScreen;
