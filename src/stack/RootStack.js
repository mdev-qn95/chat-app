import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import ContactComponent from "../component/ContactComponent";
import LoginComponent from "../component/LoginComponent";
import MessagesComponent from "../component/MessagesComponent";
import NotificationComponent from "../component/NotificationComponent";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        MessagesScreen: {
            screen: MessagesComponent,
            navigationOptions: {
                tabBarLabel: 'Messages'
            }
        },
        ContactScreen: {
            screen: ContactComponent,
            navigationOptions: {
                tabBarLabel: 'Contact'
            }
        },
        NotificationScreen: {
            screen: NotificationComponent,
            navigationOptions: {
                tabBarLabel: 'Notification'
            }
        },
    }
)

const StackNavigator = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginComponent,
            navigationOptions: {
                headerShown: false
            }
        },
        HomeScreen: {
            screen: TabNavigator,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)

export default createAppContainer(StackNavigator);