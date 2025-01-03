import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useExpoRouter } from 'expo-router/build/global-state/router-store';
export default function index() {
    const firebaseConfig = {
        apiKey: "AIzaSyBc24lPTje7pq_twb5Ggf2o4fyexu86nGw",
        authDomain: "socialmediaapp-rn.firebaseapp.com",
        projectId: "socialmediaapp-rn",
        storageBucket: "socialmediaapp-rn.firebasestorage.app",
        messagingSenderId: "362433250393",
        appId: "1:362433250393:web:9de83259191b1f947f5d48",
        measurementId: "G-BQZQMPPWSX"
      };
    firebase.initializeApp(firebaseConfig)
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useExpoRouter();
    const submitClick = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("Email is invalid");
        }
        if(password.length <= 5) 
            alert("Minimum lenght of password should be 6");

        try {
            const respnse = await firebase.auth().signInWithEmailAndPassword(email,password);
            if(respnse.user == null) {
                console.log("User is null now creating account");
                createNewUserFlow()
            } else {
                navigateToHome()
            }
        }catch(e) {
            console.log("Got error when sign in " + e);
            createNewUserFlow()
        }
    }

    const createNewUserFlow = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
            if(response == null) {
                alert("Something went wrong. Try again later");
            } else {
                navigateToHome()
            }
        } catch(e) {
            console.log("Error creating new user in firebase " + e);
        }
    }

    const navigateToHome = () => {
        router.replace("../(home)");
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Social Media App</Text>
      <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder='Enter your email'
      style={styles.inputField}/>
      <TextInput
      value={password}
      onChangeText={setPassword}
      placeholder='Enter your password'
      style={styles.inputField}/>

      <TouchableOpacity style={styles.submitButton} onPress={submitClick}>
            <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b5f86a',
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 700
    },
    inputField: {
        width: 'auto',
        marginHorizontal: 15,
        paddingVertical: 20,
        paddingStart: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 20
    },
    submitButton: {
        backgroundColor: 'orange',
        width: 100,
        alignSelf: 'center',
        marginTop: 25,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1
    },
    buttonText: {
        padding: 10,
        fontSize: 16,
        textAlign: 'center'
    }
})