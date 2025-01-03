import { View, Text } from 'react-native'
import React from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
export default function create() {
    interface Posts {
        uuid: string,
        user_id: string,
        content: string,
        content_type: string,
        content_url: string,
        likes: number,
        comments: Array<Comments>
    }
    interface Comments {
        user_id: string,
        content: string
    }
    const firebaseConfig = {
                apiKey: "AIzaSyBc24lPTje7pq_twb5Ggf2o4fyexu86nGw",
                authDomain: "socialmediaapp-rn.firebaseapp.com",
                projectId: "socialmediaapp-rn",
                storageBucket: "socialmediaapp-rn.firebasestorage.app",
                messagingSenderId: "362433250393",
                appId: "1:362433250393:web:9de83259191b1f947f5d48",
                measurementId: "G-BQZQMPPWSX"
              };
        const app = firebase.initializeApp(firebaseConfig);
        const db = getFirestore(app);
  return (
    <View>
      <Text>create</Text>
    </View>
  )
}