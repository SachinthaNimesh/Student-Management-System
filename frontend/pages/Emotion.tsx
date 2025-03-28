import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { getCurrentDateTime } from "../utils/dateTimeUtils";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { sendMood } from "../api/moodService";

const screenWidth = Dimensions.get("window").width;

const Emotion = ({ route }) => {
  const navigation = useNavigation();
  // Extract student_id from route params, or use a default if not provided
  const student_id = route.params?.student_id || 1;

  const handleMoodPress = async (
    emotion: "happy" | "neutral" | "sad",
    isDaily: boolean
  ) => {
    try {
      // Pass student_id, emotion as a string, and isDaily as separate arguments
      await sendMood(student_id, emotion, isDaily);
      navigation.navigate("CheckOutScreen");
    } catch (error) {
      console.error(error);
    }
  };
  // ### remove text based navigation
  return (
    <>
      <Header getCurrentDateTime={getCurrentDateTime}>
        <View
          style={{
            padding: 10,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            width: screenWidth - 60,
            borderRadius: 18,
            alignItems: "center",
          }}
        >
          <Text
            style={styles.question}
            onPress={() => navigation.navigate("CheckOutScreen")}
          >
            How are you feeling Now?
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoodPress("happy", false)}
          >
            <View style={styles.btnContent}>
              <Image
                source={require("../assets/happy.png")}
                style={{
                  width: 54,
                  height: 54,
                  borderColor: "#000",
                }}
              />
              <Text style={styles.text}>Happy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoodPress("neutral", false)}
          >
            <View style={styles.btnContent}>
              <Image
                source={require("../assets/neutral.png")}
                style={{
                  width: 54,
                  height: 54,
                  borderColor: "#000",
                }}
              />
              <Text style={styles.text}>Neutral</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoodPress("sad", false)}
          >
            <View style={styles.btnContent}>
              <Image
                source={require("../assets/sad.png")}
                style={{
                  width: 54,
                  height: 54,
                  borderColor: "#000",
                }}
              />
              <Text style={styles.text}>Sad      </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            width: screenWidth - 60,
            height: 100,
            borderRadius: 18,
            alignItems: "center",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            gap: 25,
          }}
        >
          <Image
            source={require("../assets/checkout.png")}
            style={styles.image}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 13.31,
              paddingHorizontal: 26.62,
              backgroundColor: "#fbff00",
              borderRadius: 13.31,
              borderColor: "rgba(0, 0, 0, .2)",
              borderWidth: 1,
              shadowColor: "rgba(146, 23, 23, 0.25)",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 1,
              shadowRadius: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Feedback")}
          >
            <Text
              style={{
                fontSize: 18.63,
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Early Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </Header>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    margin: 10,
    height: 83,
    width: "90%",
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
  image: {
    width: 55,
    height: 60,
  },
  text: {
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    gap: 20,
  },
  question: {
    color: "#000",
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    textAlign: "left",
  },
});

export default Emotion;
