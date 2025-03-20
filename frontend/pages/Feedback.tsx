import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { getCurrentDateTime } from '../utils/dateTimeUtils';
import { Button, Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {sendMood} from '../api/moodService';

const Feedback = ({route}) => {
        const navigation = useNavigation();
        // Extract student_id from route params, or use a default if not provided
        const student_id = route.params?.student_id || 1;
    
        const handleMoodPress = async (emotion: 'happy' | 'neutral' | 'sad', isDaily: boolean) => {
            try {
                // Pass student_id, emotion as a string, and isDaily as separate arguments
                await sendMood(student_id, emotion, isDaily);
                navigation.navigate('CheckOutGreeting');
            } catch (error) {
                console.error(error);
            }
        };

    return (
        <Header getCurrentDateTime={getCurrentDateTime}>
            <View style={{ 
                padding: 10, 
                backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                width: 360, 
                height: 512, 
                borderRadius: 18,
                alignItems: 'center' 
            }}>
                <Text style={styles.question} onPress={() => {}}>How was your day at work?
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => handleMoodPress('happy', true)}>
                    <View style={styles.btnContent}>
                        <Image 
                            source={require('../assets/happy.png')} 
                            style={{ 
                                width: 54, 
                                height: 54, 
                                borderColor: '#000' 
                            }} 
                        />
                        <Text style={styles.text}>Happy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handleMoodPress('neutral', true)}>
                    <View style={styles.btnContent}>
                        <Image 
                            source={require('../assets/neutral.png')} 
                            style={{ 
                                width: 54, 
                                height: 54, 
                                borderColor: '#000' 
                            }} 
                        />
                        <Text style={styles.text}>Neutral</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handleMoodPress('sad', true)}>
                    <View style={styles.btnContent}>
                        <Image 
                            source={require('../assets/sad.png')} 
                            style={{ 
                                width: 54, 
                                height: 54, 
                                borderColor: '#000' 
                            }} 
                        />
                        <Text style={styles.text}>Sad      </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Header>
    );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        margin: 10,
        height: 83,
        width: 287,
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
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
    btnContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        gap: 20,
    },
    question:{
        color: '#000',
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'left',
    },
}); 

export default Feedback;