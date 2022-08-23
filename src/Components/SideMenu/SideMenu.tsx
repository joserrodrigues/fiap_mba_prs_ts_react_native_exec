import React from 'react';
import { View } from 'react-native';
import { Icon, Text} from 'react-native-elements';
import { BoxUserInfo, IconText, IconView, WelcomeText } from './SideMenuStyle';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';


type IProps = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
  logout: () => void;
  userInfo: {
    name: string;
  };
};

const SideMenu = (props :IProps) => {
    let firstLetter = props.userInfo.name.charAt(0);
    return (
        <DrawerContentScrollView {...props}>
            <BoxUserInfo>
                <IconView>
                    <IconText>{firstLetter}</IconText>
                </IconView>
                <WelcomeText>Olá, {props.userInfo.name}</WelcomeText>
            </BoxUserInfo>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                icon={({ color, size}) =>
                    <Icon
                        name='exit'
                        type='ionicon'
                        size={size}
                        color={color}
                        tvParallaxProperties={false}
                    />
                }
                onPress={props.logout}
            />
        </DrawerContentScrollView>
    );    
};

export default SideMenu;