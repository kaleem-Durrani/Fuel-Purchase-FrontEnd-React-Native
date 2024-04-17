import React, { useState } from "react";
import { View, Image } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import {
  Select,
  SelectTrigger,
  Icon,
  ChevronDownIcon,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@gluestack-ui/themed";

function PumpLocator() {
  const [selectedValue, setSelectedValue] = useState("All Pumps");

  const handleSelectChange = (value: any) => {
    setSelectedValue(value);
  };

  const getImageSource = () => {
    // Return the image source based on the selected value
    switch (selectedValue) {
      case "All Pumps":
        return require("../assets/allPumps.jpeg");
      case "pso":
        return require("../assets/pso.jpeg");
      case "shell":
        return require("../assets/shell.jpeg");
      case "byco":
        return require("../assets/byco.jpeg");
      default:
        return null; // You can provide a default image or handle it as needed
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectView}>
        <Select onValueChange={handleSelectChange} defaultValue={selectedValue}>
          <SelectTrigger variant="rounded" size="md">
            <SelectInput placeholder="Select option" />
            <SelectIcon mr="$3">
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Shell Pumps" value="shell" />
              <SelectItem label="PSO Pumps" value="pso" />
              <SelectItem label="BYCO Pumps" value="byco" />
              <SelectItem label="All Pumps" value="all" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>
      <View style={styles.imageView}>
        {selectedValue ? (
          <Image source={getImageSource()} style={styles.imageStyle} />
        ) : (
          <Text>Select a Pump</Text>
        )}
      </View>
    </View>
  );
}

export default PumpLocator;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  selectView: {
    // backgroundColor: "gray",
    flex: 1,
    justifyContent: "center",
    marginTop: "3%",
    elevation: 5, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    padding: 16,
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
  imageView: {
    // backgroundColor: "cyan",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    elevation: 5, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    padding: 16,
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
  imageStyle: {
    width: "80%",
    height: "80%",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    padding: 16,
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
});
