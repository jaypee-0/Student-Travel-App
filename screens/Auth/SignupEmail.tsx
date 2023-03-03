import { ImageBackground, SafeAreaView, TextInput, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '../../types'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../shared/utils/firebase'
import { setToken } from '../../slices/authSlice'
import { doc, setDoc } from 'firebase/firestore'

const SignupEmail = ({ route }: RootStackScreenProps<'SignupEmail'>) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const bgImg = require('../../assets/images/onboarding/reinhart-julian.jpg')

const [fullName, setfullName] = React.useState('')
const [phone, setphone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, seterror] = React.useState("")

  const handleSubmit = async () => {
    if (email && password && fullName && phone) {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userFir: any) => {
              console.log(userFir, 'userFir')
                if (userFir) {
                    const docRef = doc(db, "users", userFir.user.uid);
                    await setDoc(docRef, {
                        uid: userFir.user.uid,
                        name: fullName,
                        email: email,
                        mobileNumber: phone,
                        password: password
                    }).then(() => {
                      dispatch(setToken(userFir.user.accessToken)); 
                    }).catch((e) => {
                      console.log(e, 'e')
                    })
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
                seterror(error);
            });
    }
};

  return (
    <SafeAreaView>
      <StatusBar />
      <ImageBackground source={bgImg} resizeMode="cover" style={tw`h-full w-full justify-center self-center`}>
        <View style={tw`bg-[]`}>
          <View style={tw`mx-8 bg-white rounded-xl`}>
            <View style={tw`mx-auto w-full py-10 px-4`}>
              <View style={tw`w-full flex flex-row border-[1px] border-[#fff] rounded-[10px] pl-4 py-3 border-[#35377B]`}>
                <AntDesign name="user" size={24} style={tw`mr-2`} color={'#35377B'} />
                <TextInput
                  placeholder="Full Name"
                  placeholderTextColor="#35377B"
                  onChangeText={(text: string): void => {
                    setfullName(text)
                  }}
                  autoFocus
                  style={tw`text-[#000]`}
                  value={fullName}
                />
              </View>
              <View style={tw`w-full flex flex-row border-[1px] my-5 border-[#fff] rounded-[10px] pl-4 py-3 border-[#35377B]`}>
                <AntDesign name="phone" size={24} style={tw`mr-2`} color={'#35377B'} />
                <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor="#35377B"
                  onChangeText={(text: string): void => {
                    setphone(text)
                  }}
                  style={tw`text-[#000]`}
                  value={phone}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={tw`w-full flex flex-row border-[1px] border-[#fff] rounded-[10px] pl-4 py-3 border-[#35377B]`}>
                <Ionicons name="mail" size={24} style={tw`mr-2`} color={'#35377B'} />
                <TextInput
                  placeholder="Input your email address"
                  placeholderTextColor="#35377B"
                  onChangeText={(text: string): void => {
                    setEmail(text)
                  }}
                  keyboardType="email-address"
                  style={tw`text-[#000]`}
                  value={email}
                />
              </View>

              <View style={tw`my-5 flex flex-row py-3 pl-4 rounded-[10px] w-full border border-[#35377B] items-center`}>
                <Ionicons name="lock-closed" size={24} style={tw`mr-2`} color='#35377B' />
                <TextInput
                  style={tw` text-[#000]`}
                  onChangeText={(text: string): void => {
                    setpassword(text)
                  }}
                  value={password}
                  placeholder="Password"
                  placeholderTextColor="#35377B"
                  secureTextEntry={showPassword}
                />

                <View style={tw`underline text-[13px] font-semibold text-[#fff] ml-auto mr-4`}>
                  <FontAwesome name={!showPassword? "eye": "eye-slash"} size={24} color={!showPassword ? '#1D3177' : '#1D3177'} onPress={() => setShowPassword(!showPassword)} />
                </View>
              </View>
{error&& <Text style={tw`text-[#f00] mb-3`}>{error}</Text>}

            <TouchableOpacity
              disabled={isLoading}
              onPress={handleSubmit}
              style={[
                tw`bg-[${!isLoading ? '#1D3177' : '#1D317799'}] rounded-lg py-4 px-3`,
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
              {isLoading ? <ActivityIndicator color={'#ddd'} /> : 
              <Text style={[tw`text-center text-xl text-white`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>Sign Up</Text> }
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SignupEmail
