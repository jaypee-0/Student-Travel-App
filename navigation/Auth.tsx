
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import LinkingConfiguration from './LinkingConfiguration'
import { RootStackParamList } from '../types'
import { ColorSchemeName } from 'react-native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
// Pre Auth Screens
import OnBoard from '../screens/Onboard'
import AuthScreen from '../screens/Auth'
import LoginEmail from '../screens/Auth/LoginEmail'
import SignupEmail from '../screens/Auth/SignupEmail'

const Stack = createStackNavigator<RootStackParamList>()
export default function Auth({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        {/* Pre Authentication */}
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <Stack.Screen
          name="LoginEmail"
          component={LoginEmail}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <Stack.Screen
          name="SignupEmail"
          component={SignupEmail}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
