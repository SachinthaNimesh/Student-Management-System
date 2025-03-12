import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header'; 
import { getCurrentDateTime } from '../utils/dateTimeUtils'; 

const WelcomeGreeting: React.FC = ({navigation}) => {
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
      setWelcomeText(`You are amazing!\nLet’s have a great day at work!\n✨🏆🎯`);

      const timer = setTimeout(() => {
        navigation.replace('Emotion');
      }, 3000); // 3 second delay
  
      return () => clearTimeout(timer);
    }, [navigation]);
    
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar style="auto" />
      <Header getCurrentDateTime={getCurrentDateTime}>
        <View style={{ padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.6)', width:374, height:512, borderRadius:18}}>
          <Text style={{ color: '#000', fontSize: 48, fontFamily: 'Poppins-SemiBold', textAlign:'center', alignContent:'center', justifyContent:'center', marginTop: 70 }}>
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

export default WelcomeGreeting;