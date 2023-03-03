/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
//import { NativeStackScreenProps } from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;

  OnBoard: undefined;
  AuthScreen: undefined;
  LoginEmail: undefined;
  SignupEmail: undefined;
  
    // Bottom Tab
    BottomTabs: undefined;
    
    // Other Screens
    InsightsGaming: undefined;
    InsightsStudy: undefined;
    InsightsSteps: undefined;
    
  };
  
  export type RootStackScreenProps<Screen extends keyof RootStackParamList> = any;
  
  export type RootTabParamList = {
    Home: undefined;
    Coop: undefined;
    Balance: undefined;
    Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,any
>;
