import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useExpoRouter } from 'expo-router/build/global-state/router-store'
export default function index() {
    const router = useExpoRouter();
    useEffect(() => {
        setTimeout(() => {
            router.replace("(login)")
        },2000)
    },[])
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