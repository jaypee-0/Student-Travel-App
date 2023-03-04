import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout/Main'
import tw from 'twrnc'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'

const InsightsSteps = () => {
  const data = [
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' },
    { amount: '4,000', date: '3:27PM' }
  ]
  return (
    <Layout insights={true}>
      <View style={tw`flex-1 pt-4`}>
        <Text style={[tw`text-[#fff] text-[30px] mb-4`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>STEPS History</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(({ amount, date }, index) => (
            <View key={index} style={tw`flex flex-row justify-between px-6 py-3 bg-[#fff] rounded-xl mb-3 items-center`}>
              <View style={tw`flex flex-row items-center`}>
                <Text style={[tw`text-[#000] text-[24px]`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>{amount + ' '}</Text>
                <Text style={[tw`text-[#000] text-[16px]`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>steps</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <Text style={[tw`text-[#000] text-[14px] mr-2 mt-auto`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>{date}</Text>
                <Feather name="smartphone" size={24} color="black" />
                <Ionicons name="md-watch-outline" size={24} color="#00000080" style={tw`ml-1`} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Layout>
  )
}

export default InsightsSteps
