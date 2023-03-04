import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Layout from '../../../components/Layout/Main'
import tw from 'twrnc'

const TabThreeScreen = () => {
  const balance = 8939.0
  return (
    <Layout balance={true}>
      <View style={tw`self-center`}>
        <Text style={[tw`text-[#fff] text-[24px] text-center`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>Balance</Text>
        <Text style={[tw`text-[#fff] text-[30px] text-center my-2`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>{balance}</Text>
        <Text style={[tw`text-[#fff] text-[16px] text-center bg-[#FFFFFF50] px-2 py-2 rounded-2xl`, { fontFamily: 'DarkerGrotesque_400Regular' }]}>You are working for tokens</Text>
      </View>

      <View>
        <Text style={[tw`text-white my-3 text-2xl`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>Earning Summary</Text>
        <View style={tw`bg-[#2C3A7C90] rounded-2xl p-3`}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-[#fff] text-lg`}>Today</Text>
            <View style={tw`flex flex-row`}>
              <Text style={[tw`text-[#fff] bg-[#281C49] py-1 px-3 rounded-tl-lg rounded-bl-lg`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>+ 0.0</Text>
              <Text style={[tw`text-[#fff] bg-[#2F4181] py-1 px-3 rounded-br-lg rounded-tr-lg`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>+ 0.0</Text>
            </View>
          </View>

          {/* Tokens earned */}

          <LinearGradient colors={['#2C2D68', '#6E365F']} style={tw`flex flex-row justify-between bg-[#272456] rounded-xl py-2 px-3 mt-4`}>
            <View style={tw`w-[80%]`}>
              <Text style={[tw`text-white text-[20px]`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>Tokens earned from co-studying</Text>
              <Text style={[tw`text-white text-sm`, { fontFamily: 'DarkerGrotesque_400Regular' }]}>Your first 1 hour of studying per day gets converted into TOKENS. Increase this with Premium.</Text>
              <TouchableOpacity style={tw`bg-[#787299] py-2 mt-3 rounded-lg w-[50%]`}>
                <Text style={[tw`text-white text-center text-lg`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>See in wallet</Text>
              </TouchableOpacity>
            </View>
            <Text style={[tw`text-white text-lg`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>+2.72</Text>
          </LinearGradient>

          {/* DAILY */}

          <View style={tw`flex flex-row justify-between bg-[#272456] rounded-xl py-2 px-3 mt-4`}>
            <View>
              <Text style={[tw`text-white text-[20px]`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>Daily Rewards 2/3</Text>
              <Text style={[tw`text-white text-sm`, { fontFamily: 'DarkerGrotesque_400Regular' }]}>at 6:08 PM</Text>
            </View>
            <Text style={[tw`text-white text-sm`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>+2.72</Text>
          </View>
          <TouchableOpacity style={tw`bg-[#787299] py-4 mt-3 rounded-xl`}>
            <Text style={[tw`text-white text-center text-lg`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>See all transactions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default TabThreeScreen
