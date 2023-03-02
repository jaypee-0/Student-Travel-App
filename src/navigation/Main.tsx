import React from "react";
import { Animated, Dimensions, Image, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatBubbleLeftRightIcon, MapPinIcon, PhoneArrowUpRightIcon, Square3Stack3DIcon } from "react-native-heroicons/mini";
import pic from "../assets/card/user.png";
// Bottom Tab Screens
import HomeScreen from "../screens/BottomTabs/HomeScreen"; // As Chat
import Discovery from "../screens/BottomTabs/DiscoveryScreen";
import Nearby from "../screens/BottomTabs/NearbyScreen";
import RingAll from "../screens/BottomTabs/RingAllScreen";
import Profile from "../screens/BottomTabs/ProfileScreen";

// Other Screens
import SingleChat from "../screens/SingleChat"
import EditProfile from "../screens/EditProfile"
import ProfileScreen2 from "../screens/ProfileScreen2"
import MainSettings from "../screens/Settings/MainSettings";
import Notifications from "../screens/Notifications";
import UpdatePassword from "../screens/Settings/UpdatePassword";
import DeactivateAcoount from "../screens/Settings/DeactivateAcoount";
import BlockedUsers from "../screens/Settings/BlockedUsers";
import PhoneNumberVerification from "../screens/Settings/PhoneNumberVerification";
import PhoneNumberVerificationOtpPage from "../screens/Settings/PhoneNumberVerficationOtpPage";
import LocationFinder from "../screens/LocationFinder";
import Interests from "../screens/Interests";
import KnowMeMore from "../screens/KnowMeMore";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPic, setUserPic } from "../slices/userProfileSlice";
import { selectID, selectToken } from "../slices/authSlice";
import { useQuery } from "@apollo/client";
import GET_SOCIAL_PROFILE from "../utils/queries"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Membership from "../screens/SideBar/Membership";

export default function Main() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="Bottom">
            <Stack.Screen name="Bottom" component={BottomNavigator} options={{ headerShown: false }} />
            
            <Stack.Screen name="SingleChat" component={SingleChat} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileScreen2" component={ProfileScreen2} options={{ headerShown: false }} />
            
            <Stack.Screen name="Interests" component={Interests} options={{ headerShown: false }} />
            <Stack.Screen name="KnowMeMore" component={KnowMeMore} options={{ headerShown: false }} />
            
            <Stack.Screen name="MainSettings" component={MainSettings} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />

            <Stack.Screen name="PhoneNumberVerification" component={PhoneNumberVerification} options={{ headerShown: false }} />
            <Stack.Screen name="PhoneNumberVerificationOtpPage" component={PhoneNumberVerificationOtpPage} options={{ headerShown: false }} />
            <Stack.Screen name="BlockedUsers" component={BlockedUsers} options={{ headerShown: false }} />

            <Stack.Screen name="DeactivateAcoount" component={DeactivateAcoount} options={{ headerShown: false }} />

            <Stack.Screen name="LocationFinder" component={LocationFinder} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    const userPic = useSelector(selectUserPic)
    // Animated Tab Indicator...
    const tabOffsetValue = React.useRef(new Animated.Value(0)).current;
    const { width } = Dimensions.get("window");

    function getWidth() {
        let width = Dimensions.get("window").width;
        width = width - 80;
        return width / 5;
    }

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    showLabel: false,
                    tabBarActiveTintColor: "#222968",
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "white",
                        position: "absolute",
                        // height: width < 350 ? 60 : 75,
                        height:  Platform.OS === "ios" ? width < 350 ? 60 : 75 : width < 350 ? 60 : 53,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 10
                        },
                        paddingHorizontal: 20
                    }
                }}
            >
                {/* <Tab.Group>
                    
                <Tab.Screen component={MyDrawer} name="sidebar" />              */}
                <Tab.Screen
                    component={Discovery}
                    name="Discover"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    position: "absolute"
                                }}
                            >
                                <Square3Stack3DIcon color={focused ? "#222968" : "gray"} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 0.2,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                {/* </Tab.Group> */}
                <Tab.Screen
                    component={Nearby}
                    name="Nearby"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    position: "absolute"
                                }}
                            >
                                <MapPinIcon color={focused ? "#222968" : "gray"} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 1.275,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />

                <Tab.Screen
                    component={RingAll}
                    name="Ring all"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    position: "absolute"
                                }}
                            >
                                <PhoneArrowUpRightIcon color={focused ? "#222968" : "gray"} />
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 2.42,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                
                <Tab.Screen
                    component={HomeScreen}
                    name="Chat"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    position: "absolute"
                                }}
                            >
                                <ChatBubbleLeftRightIcon color={focused ? "#222968" : "gray"} />
                                <View style={{ backgroundColor: "#FF3A44", height: 8, width: 8, bottom: 15, left: 18, alignItems: "center", justifyContent: "center", borderRadius: 5, padding: 2, position: "absolute" }}></View>
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 3.6,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />

                <Tab.Screen
                    component={Profile}
                    name="Profile"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    position: "absolute"
                                }}
                            >
                                {
                                    userPic?
                                    <Image style={{ width: 23, height: 23, borderRadius: 50, borderWidth: 2 }} source={{uri: userPic}} borderColor={focused ? "#222968" : "gray"} name="search" />
                                    :
                                    <Image style={{ width: 23, height: 23, borderRadius: 50, borderWidth: 2 }} source={pic} borderColor={focused ? "#222968" : "gray"} name="search" />
                                }
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 4.67,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
            </Tab.Navigator>
            <Animated.View
                style={{
                    width: getWidth() - 18,
                    height: 2,
                    backgroundColor: "#222968",
                    position: "absolute",
                    bottom:  Platform.OS === "ios" ? width < 350 ? 58 : 71 : width < 350 ? 58 : 51,
                    left: 20,
                    borderRadius: 20,
                    transform: [{ translateX: tabOffsetValue }]
                }}
            ></Animated.View>
        </>
    );
};


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }
    
  function MyDrawer() {
    return (
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Membership" component={Membership} />
      </Drawer.Navigator>
    );
  }
  
