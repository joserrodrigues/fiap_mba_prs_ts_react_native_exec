import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { registerRootComponent } from 'expo';
import { Icon } from "react-native-elements";

import Colors from '../Utils/Constants/Colors';
import HomeController from '../Screens/Home/HomeController';
import DetailController from '../Screens/Detail/DetailController';
import MyPositionController from "../Screens/MyPosition/MyPositionController";
import LoginController from "../Screens/Login/LoginController";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store/store";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { cleanUser } from "../store/login/LoginSlice";
import { Provider } from "react-redux";
import SideMenu from '../Components/SideMenu/SideMenu';

export type RootStackParamList = {
  Home: undefined;
  Details: { item: string };
  MyPosition: undefined;
};

export type RootDrawerParamList = {
  Main: undefined;
  MyInfoDrawer: undefined;
  MyPositionDrawer: undefined;
};

const NavigationTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.LightGrey,
    card: Colors.Red,
    text: Colors.Black,
  },
};


const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function RouteController() {

    let screenOptions = {
        headerShown: true,
        headerStyle: {
            backgroundColor: Colors.Red,
        },
        headerTintColor: Colors.Red,
        headerLayoutPreset: 'center',
    };

    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((state) => state.login.user);
    const onLogout = () => {
      dispatch(cleanUser());
    };

    const StackHome = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeController}
                    options={screenOptions} />
                <Stack.Screen name="Details" component={DetailController}
                    options={screenOptions} />
            </Stack.Navigator>
        );
    }

    const StackMyPosition = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="MyPosition"
            component={MyPositionController}
            options={{ ...screenOptions, title: "Minha Posição" }}
          />
        </Stack.Navigator>
      );
    };

    if (userInfo && userInfo.token !== "") {
      return (
        <NavigationContainer theme={NavigationTheme}>
          <Drawer.Navigator
            initialRouteName="Main"
            drawerContent={(props) => (
              <SideMenu userInfo={userInfo} logout={onLogout} {...props} />
            )}
          >
            <Drawer.Screen
              name="Main"
              component={StackHome}
              options={{
                drawerLabel: "Main",
                headerShown: false,
                drawerIcon: ({ color, size }) => {
                  return (
                    <Icon
                      name="home"
                      type="font-awesome"
                      size={size}
                      color={color}
                      tvParallaxProperties={false}
                    />
                  );
                },
              }}
            />
            <Drawer.Screen
              name="MyPositionDrawer"
              component={StackMyPosition}
              options={{
                drawerLabel: "Minha Posição",
                headerShown: false,
                drawerIcon: ({ color, size }) => (
                  <Icon
                    name="location"
                    type="ionicon"
                    size={size}
                    color={color}
                    tvParallaxProperties={false}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MyPosition"
              component={LoginController}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

const RouteControllerManagement = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteController />
      </PersistGate>
    </Provider>
  );
};

export default registerRootComponent(RouteControllerManagement);