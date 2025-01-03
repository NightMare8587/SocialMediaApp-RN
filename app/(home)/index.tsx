import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useExpoRouter } from 'expo-router/build/global-state/router-store'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useIsFocused } from '@react-navigation/native';
export default function index() {
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
    const [posts, setPosts] = useState(Array<Posts>);
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
    const app = firebase.initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const isFocused = useIsFocused();
    useEffect(() => {
        if(isFocused) {
            fetchAllPosts()
        }
    },[isFocused]);

    const fetchAllPosts = async () => {
        try{
            const response = await getDocs(collection(db, 'posts'));
            console.log("Size of response posts is " + response.size)
            response.forEach((doc) => {
                console.log(doc);
            })
        } catch(e) {
            console.log("Error fetching posts " + e)
        }
    }
  return (
    <View style={styles.constainer}>
      <Text style={styles.heading}>Social Media App</Text>
      <TouchableOpacity style={styles.fab} onPress={() => {
        router.push("/create");
      }}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fffdce'
    },
    heading: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 900
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#6200ee',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4, // For shadow effect (on Android)
        shadowColor: '#000', // For shadow effect (on iOS)
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      fabText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 400,
      },
})