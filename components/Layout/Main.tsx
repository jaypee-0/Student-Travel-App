import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'

const index = ({ children, insights }: { children: any; insights?: boolean }) => {
  const bgImg = require('../../assets/images/main/benjamin.jpg')
  const benImg = require('../../assets/images/main/benBlur.png')
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={!insights ? bgImg : benImg} resizeMode="cover" style={tw`flex-1 w-full`}>
        <SafeAreaView style={tw`flex flex-col flex-1 pt-[${Constants.statusBarHeight}] px-6`}>
          {insights && (
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={[tw`text-[#fff] text-[30px]`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>Insights</Text>
            </View>
          )}
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  )
}

export default index
