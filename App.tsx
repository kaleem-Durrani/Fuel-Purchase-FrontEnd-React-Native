import { config } from "@gluestack-ui/config";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
} from "@gluestack-ui/themed";
import { ScrollView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import Home from "./screens/Home";
import { View } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";
// import StackNavigator from "./StackNavigator";
import Screen3 from "./screens/PumpLocator";
import { createStackNavigator } from "@react-navigation/stack";
import Screen5 from "./screens/FundsTransfer";
import Screen4 from "./screens/History";
import PumpLocator from "./screens/PumpLocator";
import History from "./screens/History";
import FundsTransfer from "./screens/FundsTransfer";
import TopUp from "./screens/TopUp";
import FAQs from "./screens/FAQs";
import UpdateProfile from "./screens/UpdateProfile";
import TopUpPayment from "./screens/TopUpPayment";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PumpLocator" component={PumpLocator} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="FundsTransfer" component={FundsTransfer} />
          <Stack.Screen name="TopUp" component={TopUp} />
          <Stack.Screen name="FAQs" component={FAQs} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="TopUpPayment" component={TopUpPayment} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ribbon: {
    padding: "2%",
    marginTop: "6%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "lightblue",
    marginBottom: "3%",
  },
});
