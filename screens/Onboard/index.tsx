import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Constants from 'expo-constants'

const OnBoard = () => {
  return (
    <SafeAreaView style={tw`flex-1 text-white flex flex-col bg-[#fff] pt-[${Constants.statusBarHeight}]`}>
      
    <View>
      <Text>index</Text>
    </View>
    </SafeAreaView>
  )
}

export default OnBoard

const styles = StyleSheet.create({})