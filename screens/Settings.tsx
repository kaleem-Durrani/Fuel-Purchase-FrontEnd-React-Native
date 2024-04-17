// Screen2.js
import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Divider,
  Center,
  VStack,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Icon,
  Heading,
  CloseIcon,
} from "@gluestack-ui/themed";
import SettingsCard from "../components/SettingsCard";
import { useNavigation } from "@react-navigation/native";

const Settings = (props: any) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleCardPress = (targetScreen: String) => {
    if (targetScreen == "ChangePin") {
      setShowModal(true);

      return;
    }
    navigation.navigate(targetScreen, {
      setName: props.setName,
      name: props.name,
    });
  };

  return (
    <View style={[styles.shadowStyle, styles.container]}>
      {/* account detail text and card */}
      <Text style={styles.textStyle}>Acount Detail</Text>
      <View style={[styles.detailView, styles.shadowStyle]}>
        <View style={styles.innerView}>
          <Text>Card Number</Text>
          <Text>00100101030340</Text>
        </View>
        <Center style={styles.divider}>
          <Divider my="$0.5" />
        </Center>
        <View style={styles.innerView}>
          <Text>Account Number</Text>
          <Text>090078601</Text>
        </View>
        <Center style={styles.divider}>
          <Divider my="$0.5" />
        </Center>
        <View style={styles.innerView}>
          <Text>Email</Text>
          <Text>Not Available</Text>
        </View>
        <Center style={styles.divider}>
          <Divider my="$0.5" />
        </Center>
        <View style={styles.innerView}>
          <Text>Phone No</Text>
          <Text>Not Available</Text>
        </View>
      </View>

      <Text style={styles.textStyle}>Profile Settings</Text>
      <View style={{ flexDirection: "row", margin: "3%" }}>
        <SettingsCard
          logo={require("../assets/profile.png")}
          text="Profile Update"
          logoWidth={60}
          logoHeight={60}
          width={100}
          height={100}
          onPress={() => handleCardPress("UpdateProfile")}
        />
        <SettingsCard
          logo={require("../assets/changePin.png")}
          text={<Text>Change{"\n"} Pin</Text>}
          logoWidth={60}
          logoHeight={60}
          width={100}
          height={100}
          onPress={() => handleCardPress("ChangePin")}
        />
      </View>
      <Button
        style={{
          alignSelf: "center",
          minWidth: "35%",
          marginTop: "5%",
          backgroundColor: "#33d6ff",
        }}
      >
        <ButtonText>Log Out</ButtonText>
      </Button>
      <View>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalBackdrop onPress={() => {}} />
            <ModalContent>
              <ModalHeader>
                <Heading size="lg">Functionality Unavailable</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <View style={{ alignSelf: "center" }}>
                  <Text>
                    This functionality is unavaialable as of now, but will soon
                    appear in the coming updates. Preferably by the end of 8th
                    semester
                  </Text>
                </View>
              </ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  action="negative"
                  borderWidth="$0"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Close</ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f7f7f7",
    margin: "2%",
  },
  textStyle: {
    fontWeight: "bold",
    marginLeft: "3%",
    marginTop: "2%",
  },
  detailView: {
    width: "90%",
    height: "41%",
    marginLeft: "5%",
    marginTop: "1%",
    display: "flex",
    flexDirection: "column",
  },
  innerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    marginTop: "4%",
    marginBottom: "4%",
  },
  shadowStyle: {
    elevation: 5, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    padding: "3%",
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
});

export default Settings;
