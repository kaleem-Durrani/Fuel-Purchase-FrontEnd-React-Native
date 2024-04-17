import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
  VStack,
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
  ButtonText,
  Button,
} from "@gluestack-ui/themed";
import Card from "../components/Card";
import TopUpHistoryCard from "../components/TopUpHistoryCard";
import { useRoute } from "@react-navigation/native";

function TopUp() {
  const route = useRoute();
  const { name } = route.params;
  const [showModal, setShowModal] = useState(false);

  const handlePress = () => {
    setShowModal(true);
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={{ height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={{ alignSelf: "center", fontWeight: "bold" }}>Top Up</Text>

        <ScrollView>
          <Text
            style={{
              alignSelf: "center",
              marginTop: "3%",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {name}
          </Text>
          <Text style={{ alignSelf: "center" }}>Account Number</Text>
          <Text style={{ alignSelf: "center", fontSize: 12, color: "gray" }}>
            090078601
          </Text>

          <View
            style={[
              // styles.shadowStyle,
              {
                flexDirection: "row",
                // backgroundColor: "rgba(0,0,0,0)",
                margin: "2%",
                paddingLeft: "3%",
              },
            ]}
          >
            <ScrollView horizontal>
              <View
                style={{
                  marginRight: -10,
                  marginLeft: -9,
                }}
              >
                <Card
                  logo={require("../assets/easyPaisa.png")}
                  logoWidth={60}
                  logoHeight={60}
                  width={80}
                  height={80}
                  text={null}
                  onPress={() => handlePress()}
                />
                <Text
                  style={{ alignSelf: "center", marginTop: -10, fontSize: 12 }}
                >
                  Easy Paisa
                </Text>
              </View>
              <View style={{ marginRight: -10 }}>
                <Card
                  logo={require("../assets/jazzCash.png")}
                  logoWidth={60}
                  logoHeight={60}
                  width={80}
                  height={80}
                  text={null}
                  // targetScreen="TopUpPayment"
                  onPress={() => handlePress()}
                />
                <Text
                  style={{ alignSelf: "center", marginTop: -10, fontSize: 12 }}
                >
                  Jazz Cash
                </Text>
              </View>
              <View style={{ marginRight: -10 }}>
                <Card
                  logo={require("../assets/bankCard.png")}
                  logoWidth={60}
                  logoHeight={60}
                  width={80}
                  height={80}
                  text={null}
                  // targetScreen="TopUpPayment"
                  onPress={() => handlePress()}
                />
                <Text
                  style={{ alignSelf: "center", marginTop: -10, fontSize: 12 }}
                >
                  Top Up via{"\n"}Bank Card
                </Text>
              </View>
              <View style={{ marginRight: -10 }}>
                <Card
                  logo={require("../assets/bank.jpg")}
                  logoWidth={60}
                  logoHeight={60}
                  width={80}
                  height={80}
                  text={null}
                  // targetScreen="TopUpPayment"
                  onPress={() => handlePress()}
                />
                <Text
                  style={{ alignSelf: "center", marginTop: -10, fontSize: 12 }}
                >
                  {"   "}Bank{"\n"}Transfer
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.historyContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>
              Top Up History
            </Text>
            <View
              style={{
                flexDirection: "column",
                // backgroundColor: "lightcyan",
                padding: "1%",
              }}
            >
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
              <TopUpHistoryCard
                source="EasyPaisa"
                date="20 Nov 2023"
                amount="3000"
              />
            </View>
          </View>
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
                        This functionality is unavaialable as of now, but will
                        soon appear in the coming updates. Preferably by the end
                        of 8th semester
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
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default TopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "2%",
    marginTop: "10%",
    padding: "1%",
    // backgroundColor: "lightgray",
  },
  historyContainer: {
    margin: "2%",
    marginTop: "4%",
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
