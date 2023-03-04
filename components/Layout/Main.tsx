import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

const index = ({ children, insights, balance }: { children: any; insights?: boolean; balance?: boolean }) => {
  const navigation: any = useNavigation()
  const bgImg = require('../../assets/images/main/benjamin.jpg')
  const benImg = require('../../assets/images/main/benBlur.png')
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={insights ? benImg : balance ? benImg : bgImg} resizeMode="cover" style={tw`flex-1 w-full`}>
        <SafeAreaView style={tw`flex flex-col flex-1 pt-[${Constants.statusBarHeight}] px-6`}>
          {insights && (
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="cancel" size={24} color="#D9D9D990" />
              </TouchableOpacity>
              <Text style={[tw`text-[#fff] text-[30px] mx-auto`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>Insights</Text>
            </View>
          )}
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  )
}

export default index
