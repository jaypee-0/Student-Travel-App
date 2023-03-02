import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Pre Auth Screens
import OnBoardScreen from "../screens/Onboarding/OnBoardScreen";
import MainLoginScreen from "../screens/Auth/MainLoginScreen";
import EmailVerificationScreen from "../screens/Auth/EmailVerificationScreen";
import SignUp from "../screens/Auth/SignUp";
import OtpPage from "../screens/Auth/OtpPage";

// Post Auth Screens
import LetUsKnowYou from "../screens/PostAuth/LetUsKnowYou";
import LetUsKnowYou2 from "../screens/PostAuth/LetUsKnowYou2";
import AppMode from "../screens/PostAuth/AppMode";
import HrsConnect from "../screens/PostAuth/HrsConnect";
import EnableLocation from "../screens/PostAuth/EnableLocation";
import KeepPosted from "../screens/PostAuth/KeepPosted";
import ResetPassword from "../screens/Auth/ResetPassword";
import ResetOtpPage from "../screens/Auth/ResetOtpPage";

const Stack = createStackNavigator();
export default function Auth() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Pre Authentication */}
                <Stack.Screen name="OnBoard" component={OnBoardScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MainLoginScreen" component={MainLoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="EmailScreen" component={EmailVerificationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Otp" component={OtpPage} options={{ headerShown: false }} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
                <Stack.Screen name="ResetOtpPage" component={ResetOtpPage} options={{ headerShown: false }} />

                {/* Post Authentication */}
                <Stack.Screen name="LetUsKnowYou" component={LetUsKnowYou} options={{ headerShown: false }} />
                <Stack.Screen name="AppMode1" component={AppMode} options={{ headerShown: false }} />
                <Stack.Screen name="AppMode2" component={LetUsKnowYou2} options={{ headerShown: false }} />
                <Stack.Screen name="24hrsConnect" component={HrsConnect} options={{ headerShown: false }} />
                <Stack.Screen name="EnableLocation" component={EnableLocation} options={{ headerShown: false }} />
                <Stack.Screen name="KeepPosted" component={KeepPosted} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
