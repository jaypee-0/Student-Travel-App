import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout/Main'
import tw from 'twrnc'
import { AntDesign, Entypo } from '@expo/vector-icons'

const InsightsStudy = () => {
  const data = [
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' },
    { time: '4HRS 27MINS', text: 'Study with Brain for Calculus Test', amount: '54.72', date: '3:27PM' }
  ]
  return (
    <Layout insights={true}>
      <View style={tw`flex-1 pt-4`}>
        <Text style={[tw`text-[#fff] text-[30px] mb-4`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>CO - STUDYING History</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(({ time, amount, date, text }, index) => (
            <View key={index} style={tw`flex flex-row justify-between px-6 py-3 bg-[#fff] rounded-xl mb-3 `}>
              <View style={tw`w-[80%]`}>
                <Text style={[tw`text-[#000] text-[22px]`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>{time}</Text>
                <Text style={[tw`text-[#000] text-[16px]`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>{text}</Text>
                <Text style={[tw`text-[#000] text-[16px]`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>
                  Earned <Text style={[tw`text-[#643DCD]`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}> {' ' + amount}</Text>
                </Text>
              </View>
              <View style={tw``}>
                <Text style={[tw`text-[#000] text-[16px]`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>{date}</Text>
                <View style={tw`flex flex-row`}>
                  <Entypo name="open-book" size={24} color="black" style={tw``} />
                  <AntDesign name="calculator" size={24} color="#00000080" style={tw`ml-1`} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Layout>
  )
}

export default InsightsStudy
