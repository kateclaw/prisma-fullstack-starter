import React from "react";
import { Platform, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none"
  }
);

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    headerMode: "none"
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    headerMode: "none"
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,

  },
});

const DrawerStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Settings: {
      screen: SettingsStack
    },
    Links: {
      screen: LinksStack
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    }
  },
  {
    initialRouteName: "DrawerStack",
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#4C3E54" },
      title: "Welcome!",
      headerTintColor: "white",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
         source={require("../assets/images/hamburger-icon.png")}
         style={[styles.icon]}
      />
        </TouchableOpacity>
      )
    })
  }

  
);
