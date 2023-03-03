import React from 'react'
import { StyleSheet, Dimensions, Image, View, Platform, ColorSchemeName } from 'react-native'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList, RootTabParamList } from '../types'

// Bottom Tab Screens
import LinkingConfiguration from './LinkingConfiguration'
import TabOneScreen from '../screens/Main/BottomTabs/TabOneScreen'
import TabTwoScreen from '../screens/Main/BottomTabs/TabTwoScreen'
import TabThreeScreen from '../screens/Main/BottomTabs/TabThreeScreen'
import TabFourScreen from '../screens/Main/BottomTabs/TabFourScreen'

// Other Screens
import InsightsGaming from '../screens/Main/Insights/InsightsGaming';
import InsightsStudy from '../screens/Main/Insights/InsightsStudy';
import InsightsSteps from '../screens/Main/Insights/InsightsSteps';


export default function Main({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="InsightsGaming"
        component={InsightsGaming}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="InsightsStudy"
        component={InsightsStudy}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="InsightsSteps"
        component={InsightsSteps}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 65,
          borderTopColor: '#D9D9D9',
          width: '94%',
          borderWidth: 10,
          marginLeft: '3%',
          marginRight: '3%',
          backgroundColor: 'transparent',
          marginBottom: 10,
          borderRadius: 50,
          overflow: 'hidden',
          display: 'flex',
          margin: 'auto',
        },
        tabBarActiveBackgroundColor: '#f2f2f1',
        tabBarInactiveBackgroundColor: '#f2f2f1',
        tabBarLabelStyle: { fontSize: 12, borderColor: 'unset', borderWidth: 0, display: 'none' },
        tabBarActiveTintColor: '#f2f2f1',
        tabBarInactiveTintColor: '#f2f2f1',
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => <Entypo name="home" size={24} color={focused?"#643DCD":"#292D3260"} />
        }}
      />
      <BottomTab.Screen
        name="Coop"
        component={TabTwoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome5 name="weight-hanging" size={24} color={focused?"#643DCD":"#292D3260"} />
        }}
      />
      <BottomTab.Screen
        name="Balance"
        component={TabThreeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <Entypo name="wallet" size={24} color={focused?"#643DCD":"#292D3260"} />
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabFourScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome name="users" size={24} color={focused?"#643DCD":"#292D3260"} />
        }}
      />
    </BottomTab.Navigator>
  )
}
