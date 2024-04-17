// Screen1.js
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
  VStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import Card from "../components/Card";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "../components/CarouselCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const Screen1 = (props: any) => {
  return (
    <Box h="$80">
      <VStack space="xs" reversed={false}>
        {topBox(props.name)}
        {bottomBox(props.name)}
      </VStack>
    </Box>
  );
};

const topBox = (name) => {
  const supabaseUrl = "https://iufucultkitdqqbndjba.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZnVjdWx0a2l0ZHFxYm5kamJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5Mjk0MTMsImV4cCI6MjAxODUwNTQxM30.MSvyYGGSyJqvresUOLafAhtuf8Wu3C5SrpmEywf0gM4";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [balance, setBalance] = useState(null);
  const [points, setPoints] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the "Customer" table
        const { data, error } = await supabase
          .from("Customer")
          .select("balance, points")
          .eq("cnic", "12345-12354-1")
          .single();

        if (error) {
          console.error("Error fetching data:", error.message);
          return;
        }

        // Update state with the fetched data
        setBalance(data.balance);
        setPoints(data.points);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Box
      w="96%"
      h="30%"
      bg="$blue300"
      style={[styles.shadowStyle, styles.topBox]}
    >
      <View style={styles.dividerView}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>Available Balance</Text>
            <Text>{balance ? "Rs:" + balance : "loading..."}</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Button
              onPress={() => navigation.navigate("TopUp", { name: name })}
              style={{
                // alignSelf: "center",
                // minWidth: "35%",
                // marginTop: "5%",
                height: "50%",
                width: "68%",
                padding: 0,
                margin: 0,
                backgroundColor: "#33d6ff",
              }}
            >
              <ButtonText>+</ButtonText>
            </Button>
          </View>
        </View>
        <Divider my="$0.5" />
        <Text>Available Points</Text>
        <Text>
          <Text>{points ? "Rs:" + points : "loading..."}</Text>
        </Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          // backgroundColor: "gray",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: "1%",
        }}
      >
        {/* <Text style={{ fontWeight: "bold", fontSize: 22, color: "#11e3fa" }}>
          Pak Fuel
        </Text> */}
        <Image
          source={require("../assets/PFlogo2.png")}
          style={{ width: "72%", height: "110%" }}
        ></Image>
      </View>
    </Box>
  );
};

const bottomBox = (name: any) => {
  const navigation = useNavigation();

  // const route = useRoute();
  // const name = route.params;

  const handleCardPress = (screenName: String) => {
    navigation.navigate(screenName, { name: name });
  };

  return (
    <Box w="100%" h="95%">
      <View style={[{ marginHorizontal: "2%" }]}>
        <ScrollView
          horizontal
          style={[styles.scrollView, { backgroundColor: "#f7f7f7" }]}
        >
          <View style={styles.container2}>
            {/* Content inside the horizontal ScrollView */}
            <Card
              logo={require("../assets/mapLogo.png")}
              text={
                <Text>
                  Pump{"\n"}
                  Locator
                </Text>
              }
              onPress={() => handleCardPress("PumpLocator")}
              width={110}
              height={110}
              logoWidth={57}
              logoHeight={57}
            />
            <Card
              logo={require("../assets/historyLogo.png")}
              text="History"
              onPress={() => handleCardPress("History")}
              width={110}
              height={110}
              logoWidth={57}
              logoHeight={57}
            />
            <Card
              logo={require("../assets/fundTransfer.png")}
              text={
                <Text>
                  Funds{"\n"}
                  Transfer
                </Text>
              }
              onPress={() => handleCardPress("FundsTransfer")}
              width={110}
              height={110}
              logoWidth={57}
              logoHeight={57}
            />
            <Card
              logo={require("../assets/topup.png")}
              text="Top up"
              onPress={() => handleCardPress("TopUp")}
              width={110}
              height={110}
              logoWidth={57}
              logoHeight={57}
            />
            <Card
              logo={require("../assets/faq.png")}
              text="FAQs"
              onPress={() => handleCardPress("FAQs")}
              width={110}
              height={110}
              logoWidth={57}
              logoHeight={57}
            />
            {/* Add more items as needed */}
          </View>
        </ScrollView>
      </View>
      <View
        style={[
          {
            marginHorizontal: "0%",
            padding: "2%",
            marginTop: "4%",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Carousel
          // layout="stack"
          // layoutCardOffset={`50`}
          containerCustomStyle={{ overflow: "visible" }}
          data={items}
          renderItem={({ item }) => <CarouselCard item={item} />}
          firstItem={1}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.77}
          sliderWidth={300}
          itemWidth={250}
          loop={true}
          slideStyle={{
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
          }}
          autoplay={true}
          autoplayInterval={2000}
        />
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightcyan",
  },
  topBox: {
    padding: "4%",
    flexDirection: "row",
    marginHorizontal: "2%",
    // backgroundColor: "#f7f7f7",
  },
  bottomBox: {},
  dividerView: {
    width: "48%",
    padding: "0%",
    // backgroundColor: "lightgray",
  },
  scrollView: {
    height: "40%", // Specify the desired height
    // backgroundColor: "red",
    margin: "1%",
  },
  container2: {
    flexDirection: "row", // Make the content inside the ScrollView horizontal
    // padding: "1.3%",
    // backgroundColor: "lightgray",
    alignItems: "center",
  },
  shadowStyle: {
    elevation: 4, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
});

export default Screen1;

const items = [
  {
    id: 1,
    name: "Ad 1",
    image: require("../assets/Ad1.jpg"),
  },
  {
    id: 2,
    name: "Ad 2",
    image: require("../assets/Ad2.jpg"),
  },
  {
    id: 3,
    name: "Ad 3",
    image: require("../assets/Ad3.jpg"),
  },
];
