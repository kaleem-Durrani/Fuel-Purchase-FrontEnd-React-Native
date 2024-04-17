import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./screens/Screen1";
import Settings from "./screens/Settings";
// @ts-ignore
import Icon from "react-native-vector-icons/Ionicons";
import QR from "./screens/QR";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: "9%",
          marginBottom: 10,
          borderRadius: 50,
          marginHorizontal: 10,
          // backgroundColor: "#dbfffe",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = focused ? size + 5 : size;
          if (route.name === "Home Page") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Buy Fuel") {
            iconName = focused ? "qr-code" : "qr-code-outline"; // Change to the appropriate icon name
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can add more conditions for additional tabs

          return <Icon name={iconName} size={iconSize} color={"#11e3fa"} />;
        },
        tabBarLabelStyle: {
          // color: "cyan", // Set the label text color
          display: "none",
        },
        tabBarActiveTintColor: "#11e3fa", // Set the active tab icon and label text color
      })}
      sceneContainerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
    >
      <Tab.Screen name="Home Page">
        {() => <Screen1 name={props.name} />}
      </Tab.Screen>
      <Tab.Screen name="Buy Fuel" component={QR} />
      <Tab.Screen
        name="Settings"
        // options={{
        //   tabBarLabel: "Settings",
        //   tabBarIcon: ({ color, size }) => (
        //     <Icon name="settings" size={size} color={color}

        //     />
        //   ),
        // }}
      >
        {() => <Settings setName={props.setName} name={props.name} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
