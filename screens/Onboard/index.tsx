import {
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '../../types'

const OnBoard = ({route}: RootStackScreenProps<"OnBoard">) => {
  const navigation = useNavigation()
  const bgImg = require('../../assets/images/onboarding/reinhart-julian.jpg')
  const whiteLogo = require('../../assets/images/logo-white.png')

  return (
    <SafeAreaView>
      <StatusBar />
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={tw`h-full w-full justify-center self-center`}
      >
        <View style={tw`px-8`}>
          <Image source={whiteLogo} resizeMode="contain" />
          <TouchableOpacity
            onPress={() => navigation.navigate('AuthScreen')}
            style={[tw`bg-[#fff] rounded-lg py-4 px-3`, {
                elevation: 27,
                shadowColor: "#D9D9D9",
                shadowRadius: 20,
                shadowOpacity: 0.9,
                shadowOffset: { width: 0, height: 6 },
                boxShadow: 5,}]}
          >
            <Text
              style={[
                tw`text-center text-xl`,
                { fontFamily: 'DarkerGrotesque_700Bold' }
              ]}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default OnBoard
