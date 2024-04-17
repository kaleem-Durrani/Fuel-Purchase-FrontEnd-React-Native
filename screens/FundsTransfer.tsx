import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
  Input,
  InputField,
  ScrollView,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

function FundsTransfer() {
  const [fundsSelected, setFundsSelected] = useState(true);

  const handleFundsClick = () => {
    setFundsSelected(true);
  };

  const handlePointsClick = () => {
    setFundsSelected(false);
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={{ height: "100%" }}
    >
      <View style={[styles.container]}>
        {buttonTabs(fundsSelected, handleFundsClick, handlePointsClick)}
        <View style={[styles.transferView]}>
          {fundsSelected ? transferFunds() : transferPoints()}
        </View>
      </View>
    </ImageBackground>
  );
}

export default FundsTransfer;

const buttonTabs = (
  fundsSelected: any,
  handleFundsClick: any,
  handlePointsClick: any
) => {
  return (
    <View style={[styles.tabButtonContainer]}>
      <View style={styles.shadowStyle}>
        <Button
          size="sm"
          variant="outline"
          action={fundsSelected ? "primary" : "secondary"}
          isDisabled={false}
          isFocusVisible={true}
          onPress={handleFundsClick}
        >
          <ButtonText>Funds Transfer </ButtonText>
        </Button>
      </View>
      <View style={styles.shadowStyle}>
        <Button
          size="sm"
          variant="outline"
          action={fundsSelected ? "secondary" : "primary"}
          isDisabled={false}
          isFocusVisible={false}
          onPress={handlePointsClick}
        >
          <ButtonText>Points Transfer </ButtonText>
        </Button>
      </View>
    </View>
  );
};

const transferFunds = () => {
  return (
    <View style={styles.transferFundsView}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>Name</Text>
          <Text style={{ fontSize: 12 }}>Account No</Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: "2%" }}>
            Rs 100.00
          </Text>
        </View>
        <View style={{ padding: "3%" }}>
          <Input
            variant="rounded"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
            style={{ marginBottom: "2%" }}
          >
            <InputField placeholder="Enter Account No" keyboardType="numeric" />
          </Input>
          <Text style={{ alignSelf: "center", marginBottom: "6%" }}>AND</Text>
          <Input
            variant="rounded"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            style={{ marginBottom: "2%" }}
          >
            <InputField placeholder="Enter Phone No" keyboardType="numeric" />
          </Input>
          <Text style={{ alignSelf: "center" }}>OR</Text>
          <Input
            variant="rounded"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            style={{ marginBottom: "2%" }}
          >
            <InputField placeholder="Enter CNIC No" keyboardType="numeric" />
          </Input>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              size="sm"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              style={{ marginTop: "15%" }}
            >
              <ButtonText>Transfer Funds</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const transferPoints = () => {
  return (
    <View style={styles.transferPointsView}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>Name</Text>
          <Text style={{ fontSize: 12 }}>Account No</Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: "2%" }}>
            Points 100
          </Text>
        </View>
        <View style={{ padding: "3%" }}>
          <Input
            variant="rounded"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
            style={{ marginBottom: "2%" }}
          >
            <InputField placeholder="Enter Account No" keyboardType="numeric" />
          </Input>
          <Text style={{ alignSelf: "center", marginBottom: "6%" }}>AND</Text>
          <Input
            variant="rounded"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            style={{ marginBottom: "2%" }}
          >
            <InputField placeholder="Enter Phone No" keyboardType="numeric" />
          </Input>
          <Text style={{ alignSelf: "center" }}>OR</Text>
          <Input
            variant="rounded"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            style={{ marginBottom: "2%" }}
          >
            <InputField placeholder="Enter CNIC No" keyboardType="numeric" />
          </Input>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              size="sm"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              style={{ marginTop: "15%" }}
            >
              <ButtonText>Transfer Points</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "25%",
    margin: "3%",
    padding: "2%",
    // backgroundColor: "rgba()",
    display: "flex",
    flex: 1,
  },
  tabButtonContainer: {
    padding: "3%",
    // backgroundColor: "cyan",
    margin: "2%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "2%",
  },
  buttonContainer: {
    justifyContent: "center",
    flex: 1,
    elevation: 2,
  },
  transferView: {
    // backgroundColor: "cyan",
    flex: 1,
    margin: "2%",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
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
  transferPointsView: {
    // backgroundColor: "cyan",
    // backgroundColor: "lightcyan",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "2%",
    flex: 1,
  },
  transferFundsView: {
    // backgroundColor: "#f8f8f8",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "2%",
    flex: 1,
  },
});
