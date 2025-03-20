import React from 'react';
import Header from '../components/Header';
import {View, StyleSheet,Image,TouchableOpacity,Text, Alert} from 'react-native';
import * as Location from 'expo-location';
import { getCurrentDateTime } from '../utils/dateTimeUtils';
import { useNavigation } from '@react-navigation/native';
import { postCheckoutById } from '../api/attendanceService';
const CheckOutScreen: React.FC = () => {
    const handleCheckOut = async () => {
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
    
          // Send check-out data to the backend
          const studentId = 1 //hard coded student id
          await postCheckoutById(studentId,latitude, longitude);
    
          navigation.navigate('Feedback');
        } catch (error) {
          Alert.alert('An error occurred during check-out');
        }
      };

    const navigation = useNavigation();
    return (
        <Header getCurrentDateTime={getCurrentDateTime}>
            <View style={styles.flexBox}>
                <Image source={require("../assets/checkout.png")} style={styles.image}/>
                <TouchableOpacity style={styles.btn} onPress={handleCheckOut}>
                    <Text style={styles.text}>Check Out</Text>
                </TouchableOpacity>
            </View>
        </Header>
    );
};

const styles = StyleSheet.create({
    flexBox: {
        padding: 10, 
        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
        width: 374, 
        height: 267, 
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 130,
    },
    image:{
        width: 93.66,
        height: 93.65,
    },
    btn:{
        padding: 10,
        margin: 10,
        height: 82,
        width: 263,
        backgroundColor: '#fbff00',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        alignContent: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Poppins', 
        fontWeight: 'bold',
    },
});

export default CheckOutScreen;