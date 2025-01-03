import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { TextInput } from 'react-native-gesture-handler';
import { useExpoRouter } from 'expo-router/build/global-state/router-store';
export default function create() {
    const router = useExpoRouter();
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
    const [input,setInput] = useState("");

    const addAttachmentF = async () => {

    }

    const createPostF = async () => {
        
    }
  return (
    <View style={styles.constainer}>
      <Text style={styles.heading}>Create Post</Text>

      <TextInput
      value={input}
      style={styles.inputPostStyle}
      placeholder='Enter your post'
      onChangeText={setInput}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.addAttachment}>Add Attachment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createPostButton}>
        <Text style={styles.addAttachment}>Create Post</Text>
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
    inputPostStyle: {
        width: 'auto',
        marginHorizontal: 15,
        paddingVertical: 20,
        paddingStart: 10,
        paddingEnd: 10,
        borderRadius: 20,
        minHeight: 70,
        backgroundColor: 'white',
        marginTop: 20
    },
    button: {
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'black',
        width: 150,
        backgroundColor: 'orange'
    },
    createPostButton: {
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: 45,
        borderWidth: 1,
        borderColor: 'black',
        width: 150,
        backgroundColor: 'orange'
    },
    addAttachment: {
        padding: 8,
        fontSize: 15,
        textAlign: 'center'
    }
})