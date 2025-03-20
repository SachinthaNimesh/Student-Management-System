import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

const Welcome = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Lobster-regular': require('frontend/assets/fonts/Lobster-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();

    const timer = setTimeout(() => {
      navigation.replace('App');
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Worky</Text>
        <Text style={styles.subtitle}>Welcome!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0052A5',
  },
  title: {
    fontSize: 110,
    fontFamily: 'Lobster-regular',
    fontWeight: '400',
    width: 304,
    height: 138,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
  },
});

export default Welcome;