import { ImageBackground, SafeAreaView, TextInput, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '../../types'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../shared/utils/firebase'
import { setToken } from '../../slices/authSlice'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { setUserDoc } from '../../slices/userSlice'

const LoginEmail = ({ route }: RootStackScreenProps<'OnBoard'>) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const bgImg = require('../../assets/images/onboarding/reinhart-julian.jpg')

  const logIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

  const [email, setEmail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, seterror] = React.useState("")

  const handleSubmit = async () => {
    setIsLoading(true);
    seterror("");
    try {
        if (password && email) {
            await logIn(email, password)
            .then(async (res: any) => {
                const userQuery = query(collection(db, "users"), where("email", "==", email))
                const userDoc = await getDocs(userQuery)
                await userDoc.docs.forEach((doc:any) => {
                  const user = doc.data()
                  console.log(user)
                     dispatch(setUserDoc({
                         fullName: user.name,
                         email: user.email,
                         mobileNumber: user.mobileNumber,
                         password: user.password,
                     }))
                })
                dispatch(setToken(res.user.accessToken));                    
            }).catch((e) => {
                seterror(e?.code);
            })
            setIsLoading(false);
        } else {
            alert("Input 'em details");
            setIsLoading(false);
        }
    } catch (err: any) {
      setIsLoading(false);
        alert(err.code?err.code:'something went wrong');
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
                <Ionicons name="mail" size={24} style={tw`mr-2`} color={'#35377B'} />
                <TextInput
                  placeholder="Input your email address"
                  placeholderTextColor="#35377B"
                  onChangeText={(text: string): void => {
                    setEmail(text)
                  }}
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
                  autoFocus
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
              <Text style={[tw`text-center text-xl text-white`, { fontFamily: 'DarkerGrotesque_700Bold' }]}>Sign In</Text> }
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginEmail
