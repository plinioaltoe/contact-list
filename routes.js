import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';
import Favorites from './screens/Favorites';
import colors from './utils/colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from "@expo/vector-icons";
import { color } from 'react-native-reanimated';


const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const ContactsScreens = createStackNavigator(
  {
    Contacts,
    Profile,
  },
  {
    initialRouteName: "Contacts",
    navigationOptions: {
      tabBarIcon: getTabBarIcon('list')
    }
  }
);
const FavoritesScreens = createStackNavigator(
  {
    Favorites,
  },
  {
    initialRouteName: "Favorites",
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star')
    }
  }
);
const UserScreens = createStackNavigator(
  {
    User,
  },
  {
    initialRouteName: "User",
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person')
    }
  }
);





const TabNavigator = createBottomTabNavigator({
  Contacts: ContactsScreens,
  Favorites: FavoritesScreens,
  User: UserScreens,
}, {
  initialRouteName: "Contacts",
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor: colors.greyLight,
    },
    showIcon: true,
    showLabel: false,
    activeTintColor: colors.blue,
    inactiveTintColor: colors.greyDark,
  }
})

export default createAppContainer(TabNavigator);