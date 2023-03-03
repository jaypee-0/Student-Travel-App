import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import {
  useFonts,
  DarkerGrotesque_300Light,
  DarkerGrotesque_400Regular,
  DarkerGrotesque_500Medium,
  DarkerGrotesque_600SemiBold,
  DarkerGrotesque_700Bold,
  DarkerGrotesque_800ExtraBold,
  DarkerGrotesque_900Black
} from '@expo-google-fonts/darker-grotesque'
import 'react-native-gesture-handler'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import * as SplashScreen from 'expo-splash-screen'
import { persistor, store } from './store'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'

SplashScreen.preventAutoHideAsync()
export default function App() {
  const colorScheme = useColorScheme()
  const isLoadingComplete = useCachedResources()

  let [fontsLoaded] = useFonts({
    DarkerGrotesque_300Light,
    DarkerGrotesque_400Regular,
    DarkerGrotesque_500Medium,
    DarkerGrotesque_600SemiBold,
    DarkerGrotesque_700Bold,
    DarkerGrotesque_800ExtraBold,
    DarkerGrotesque_900Black
  })

  if (!fontsLoaded || !isLoadingComplete) {
    return null
  } else {
    setTimeout(() => {
      SplashScreen.hideAsync()
    }, 2000)
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }} keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : -10}>
              <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} backgroundColor="#ffffff" animated={true} />
              <Navigation colorScheme={colorScheme} />
            </KeyboardAvoidingView>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    )
  }
}
