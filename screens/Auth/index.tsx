import { Modal, ImageBackground, SafeAreaView, Image, Text, View, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import GoogleIcon from '../../assets/icons/GoogleIconOriginal'
import AppleIcon from '../../assets/icons/AppleIcon'
import { MaterialIcons } from '@expo/vector-icons'
import EnvelopeIcon from '../../assets/icons/EnvelopeIcon'

const ModalPoup = ({ visible, children, signupvisible }: any) => {
  const [showModal, setShowModal] = React.useState(visible)
  const scaleValue = React.useRef(new Animated.Value(0)).current
  React.useEffect(() => {
    toggleModal()
  }, [visible, signupvisible])
  const toggleModal = () => {
    if (visible || signupvisible) {
      setShowModal(true)
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      setTimeout(() => setShowModal(false), 200)
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }
  return (
    <Modal transparent visible={showModal}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View style={[{ width: '80%', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 30, borderRadius: 20, elevation: 20 }, { transform: [{ scale: scaleValue }] }]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  )
}

const AuthScreen = () => {
  const navigation = useNavigation()
  const bgImg = require('../../assets/images/onboarding/reinhart-julian.jpg')
  const whiteLogo = require('../../assets/images/logo-white-short.png')
  const [visible, setVisible] = React.useState(false)
  const [signupvisible, setsignupvisible] = React.useState(false)

  return (
    <SafeAreaView>
      <StatusBar />
      <ImageBackground source={bgImg} resizeMode="cover" style={tw`h-full w-full justify-center self-center`}>
        <View style={tw`px-8 flex-1 bg-[#00000050]`}>
          <View style={tw`flex-2 justify-center `}>
            <Image source={whiteLogo} resizeMode="contain" style={tw`mx-auto`} />
            <Text style={[tw`text-white w-[100%] mx-auto text-center text-[20px] mt-5`, { fontFamily: 'DarkerGrotesque_900Black' }]}>
              Convert your steps, co-studying & co-gaming into a currency to spend on travel discounts and afford free flights.
            </Text>
          </View>

          <View style={tw`flex-1`}>
            <TouchableOpacity
              onPress={() => {
                  setVisible(false)
                  setsignupvisible(true)
                }
              }
              style={[
                tw`bg-[#fff] rounded-lg py-4 px-3`,
                {
                  elevation: 27,
                  shadowColor: '#D9D9D9',
                  shadowRadius: 20,
                  shadowOpacity: 0.9,
                  shadowOffset: { width: 0, height: 6 },
                  boxShadow: 5
                }
              ]}
            >
              <Text style={[tw`text-center text-xl`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(true)
                setsignupvisible(false)
              }
            }
              style={[
                tw`bg-[#fff] rounded-lg py-4 px-3 my-4`,
                {
                  elevation: 10,
                  shadowColor: '#000000',
                  shadowRadius: 30,
                  shadowOpacity: 1,
                  shadowOffset: { width: 0, height: 10 },
                  boxShadow: 10
                }
              ]}
            >
              <Text style={[tw`text-center text-xl`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>Log in to my account</Text>
            </TouchableOpacity>
            <Text style={[tw`text-white w-[80%] mx-auto text-center text-[16px]`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>
              By Creating an account you accept to our <Text style={tw`underline`}>Terms of use</Text> and <Text style={tw`underline`}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Modal */}
          <ModalPoup visible={visible}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: '100%', height: 25, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={tw`w-full mt-3`}>
                <SignUpButton route='LoginEmail' title="Continue with Email" icon={<EnvelopeIcon />} />
                <SignUpButton route='LoginEmail' title="Continue with Google" icon={<GoogleIcon />} />
                <SignUpButton route='LoginEmail' title="Continue with Apple" icon={<AppleIcon style={tw`text-white `} />} />
              </View>
            </View>
          </ModalPoup>


          {/* Sign up Modal */}
          <ModalPoup visible={signupvisible}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: '100%', height: 25, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setsignupvisible(false)}>
                  <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={tw`w-full mt-3`}>
                <SignUpButton route='SignupEmail' title="Sign up with Email" icon={<EnvelopeIcon />} />
                <SignUpButton route='SignupEmail' title="Sign up with Google" icon={<GoogleIcon />} />
                <SignUpButton route='SignupEmail' title="Sign up with Apple" icon={<AppleIcon style={tw`text-white `} />} />
              </View>
            </View>
          </ModalPoup>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default AuthScreen

function SignUpButton({ title, icon, route }: { title: string; icon: React.ReactNode; route?: string|any }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={tw`mb-4 px-6 py-4 flex flex-row justify-center border rounded-[15px] w-full items-center bg-[#281C49] border-[#dce9ff1f]`} onPress={() => navigation.navigate(route)}>
      {icon}
      <Text style={tw`text-[16px] pl-4 font-semibold text-center text-white`}>{title}</Text>
    </TouchableOpacity>
  )
}
