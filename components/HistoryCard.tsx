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

function HistoryCard(props: any) {
  const formattedDate = new Date(props.date).toLocaleDateString();
  return (
    <View style={[styles.container, styles.shadowStyle]}>
      <View style={[styles.leftView, styles.shadowStyle]}>
        <Text>{props.name}</Text>
        <Text>id: {props.id}</Text>
      </View>
      <View style={[styles.rightView, styles.shadowStyle]}>
        <Text>Date: {formattedDate}</Text>
        <Text>Amount:{props.amount}</Text>
      </View>
    </View>
  );
}

export default HistoryCard;

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
