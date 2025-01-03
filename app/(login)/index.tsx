import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function index() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitClick = async () => {
        
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