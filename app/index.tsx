import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useExpoRouter } from 'expo-router/build/global-state/router-store'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default function index() {
    const router = useExpoRouter();
    const firebaseConfig = {
        apiKey: "AIzaSyBc24lPTje7pq_twb5Ggf2o4fyexu86nGw",
        authDomain: "socialmediaapp-rn.firebaseapp.com",
        projectId: "socialmediaapp-rn",
        storageBucket: "socialmediaapp-rn.firebasestorage.app",
        messagingSenderId: "362433250393",
        appId: "1:362433250393:web:9de83259191b1f947f5d48",
        measurementId: "G-BQZQMPPWSX"
      };
    firebase.initializeApp(firebaseConfig);
    useEffect(() => {
        const userExists = fetchIfUserExists()
        setTimeout(() => {
            userExists.then((exists) => { 
                if(exists) {
                    router.replace("(home)");
                } else {
                    router.replace("(login)");
                }
            })
        },2000)
    },[]);

    const fetchIfUserExists = async () => {
        try{
            return firebase.auth().currentUser?.uid != ""
        } catch(e) {
            return false
        }
    }
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Social Media App</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#b5f86a',
        flex: 1,
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 500
    }
})