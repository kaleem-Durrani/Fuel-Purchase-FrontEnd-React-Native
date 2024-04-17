import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import { Divider, Center } from "@gluestack-ui/themed";
import { View } from "react-native";
import BottomTabNavigator from "../BottomTabNavigator";
import { useState, useEffect } from "react";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const TopRibbon = (props: any) => {
  return (
    <View style={[styles.ribbon]}>
      <Box p="$2" style={styles.shadowStyle}>
        <Center>
          <Text color="black">Welcome</Text>
          <Divider my="$0.5" />
          <Text color="black">{props.name}</Text>
        </Center>
      </Box>
    </View>
  );
};

function Home() {
  const [transactionsData, setTransactionsData] = useState([]);
  const supabaseUrl = "https://iufucultkitdqqbndjba.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZnVjdWx0a2l0ZHFxYm5kamJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5Mjk0MTMsImV4cCI6MjAxODUwNTQxM30.MSvyYGGSyJqvresUOLafAhtuf8Wu3C5SrpmEywf0gM4";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchCustomerName = async () => {
      try {
        const { data, error } = await supabase
          .from("Customer")
          .select("name")
          .eq("cnic", "12345-12354-1");

        if (error) {
          console.error("Error fetching customer name:", error.message);
          return;
        }
        // console.log(data);

        if (data && data.length > 0) {
          // console.log(data);
          setName(data[0].name);
        }
      } catch (error) {
        console.error("Error fetching customer name:", error.message);
      }
    };

    // Call the fetchCustomerName function
    fetchCustomerName();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <TopRibbon name={name ? name : "loading..."} />
        <BottomTabNavigator setName={setName} name={name} />
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ribbon: {
    padding: "2%",
    marginTop: "6%",
    height: "12%",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "2%",
  },
  shadowStyle: {
    elevation: 4, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    backgroundColor: "rgba(255,255,255,0.7)", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
});
