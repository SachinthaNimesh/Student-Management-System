import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  BackHandler,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import { getCurrentDateTime } from "../utils/dateTimeUtils";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;

const CheckOutGreeting: React.FC = () => {
  const [welcomeText, setWelcomeText] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setWelcomeText(`Great job\n today!\nYou make\n a big\n difference!\n🏅🏆 `);

    const timer = setTimeout(() => {
      BackHandler.exitApp();
      navigation.navigate("Welcome");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar style="auto" />
      <Header getCurrentDateTime={getCurrentDateTime}>
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            width: screenWidth - 60,
            borderRadius: 18,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 48,
              fontFamily: "Poppins-SemiBold",
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              padding: 30,
            }}
          >
            {welcomeText}
          </Text>
        </View>
      </Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default CheckOutGreeting;
