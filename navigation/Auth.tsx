import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from './LinkingConfiguration';

// Auth Screens
import OnBoard from '../screens/Onboard';

import { RootStackParamList } from '../types';
import { ColorSchemeName } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Auth({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       
            <Stack.Navigator>
                {/* Pre Authentication */}
                <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
           
            </Stack.Navigator>
        </NavigationContainer>
    );
}
