import React from "react";
import { View, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
} from "@gluestack-ui/themed";

function TopUpHistoryCard(props: any) {
  return (
    <View style={[styles.container, styles.shadowStyle]}>
      <View style={[styles.leftView]}>
        <Text>{props.source}</Text>
        <Text style={{ fontSize: 12 }}>Amount: </Text>
      </View>
      <View style={[styles.rightView]}>
        <Text>{props.date}</Text>
        <Text>Rs: {props.amount}</Text>
      </View>
    </View>
  );
}

export default TopUpHistoryCard;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    padding: "1%",
    marginTop: "2%",
  },
  leftView: {
    flex: 1,
    // backgroundColor: "cyan",
    padding: "1%",
    paddingLeft: "2%",
    marginRight: "2%",
  },
  rightView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: "1%",
    paddingRight: "2%",
    marginLeft: "2%",
  },
  shadowStyle: {
    elevation: 4, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
});
