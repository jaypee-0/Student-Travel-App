import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Layout from '../../../components/Layout/Main'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../../slices/userSlice'
import { logout } from '../../../slices/authSlice'
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const TabOneScreen = ({ route }: any) => {
  const dispatch = useDispatch()
  const navigation:any = useNavigation()
  const fullName = useSelector(selectUser).user.fullName
  const name = fullName.charAt(0)
  const balance = 8939.0

  const data = [
    { path: 'InsightsStudy', name: 'CO-STUDYING', qty: '4hrs 27mins', text: 'of study undergone today', todays: 'Study Goal', totalTime: '6 Hours', totalTimeText: 'of co-studying today' },
    { path: 'InsightsSteps', name: 'STEPS', qty: '147', text: 'steps today', todays: 'Steps Cap', totalTime: '5,000', totalTimeText: 'steps today' },
    { path: 'InsightsGaming', name: 'CO-GAMING', qty: '3hrs 27mins', text: 'of gaming undergone today', todays: 'Gaming Goal', totalTime: '4 Hours', totalTimeText: 'of co-gaming today' }
  ]

  return (
    <Layout>
      {/* Top */}
      <View style={tw`flex flex-row justify-between mt-3`}>
        <TouchableOpacity onPress={() => dispatch(logout())} style={tw`bg-[#fff] h-[45px] w-[45px] rounded-full`}>
          <Text style={[tw`text-black text-2xl m-auto`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>{name ? name : '0'}</Text>
        </TouchableOpacity>
        <View style={tw`bg-[#917DEC] rounded-xl px-2 flex flex-row`}>
          <Text style={[tw`text-white my-auto text-xl`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>Balance {' ' + balance}</Text>
        </View>
      </View>

      {/* Scroll Cards */}
      <ScrollView horizontal={true} style={tw`mt-10`} showsHorizontalScrollIndicator={false}>
        {data.map(({ name, path, qty, text, todays, totalTime, totalTimeText }, index) => {
          return (
            <View key={index} style={tw`rounded-2xl mr-4 min-w-[230px] max-h-[270px] flex flex-col bg-[#00000070] `}>
              <View style={tw`rounded-t-2xl bg-[#52525299] py-3`}>
                <Text style={[tw`text-white px-4 text-lg`, { fontFamily: 'DarkerGrotesque_800ExtraBold' }]}>{name}</Text>
              </View>
              <View style={tw`flex flex-col justify-center self-center mt-4`}>
                <Text style={[tw`text-white text-2xl px-4 text-center`, { fontFamily: 'DarkerGrotesque_900Black' }]}>{qty}</Text>
                <Text style={[tw`text-white text-lg px-4 text-center max-w-[80%]`, { fontFamily: 'DarkerGrotesque_500Medium' }]}>{text}</Text>
                <TouchableOpacity style={tw`flex flex-row bg-[#BFC5FA9a] mx-auto mt-3 rounded-2xl px-3 py-2`} onPress={() => navigation.navigate(path)}>
                  <Text style={tw`text-[#ffffff]`}>Insights</Text>
                  <View style={tw`rounded-[50px] bg-[#ffffff60] my-auto ml-2 p-1`}>
                    <AntDesign name="arrowright" color={'#fff'} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={tw`px-4`}>
                <Text style={[tw`text-white mt-3`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>
                  TODAY'S {' ' + todays} <Ionicons name="stats-chart-outline" size={20} color="black" style={tw`ml-4`} />
                </Text>
                <Text style={[tw`text-white -mt-1 flex flex-row justify-center`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>
                  <Text style={[tw`text-xl`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>{totalTime}</Text> {' ' + totalTimeText}
                </Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </Layout>
  )
}

export default TabOneScreen
