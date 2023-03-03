import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout/Main'
import tw from 'twrnc'

const InsightsGaming = () => {
  return (
    <Layout insights={true}>
      <View style={tw`flex-1 justify-center self-center`}>
        <Text style={[tw`text-[#fff] text-[30px]`, {fontFamily: 'DarkerGrotesque_800ExtraBold'}]}>COMING SOON</Text>
      </View>
    </Layout>
  )
}

export default InsightsGaming
