import React, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
  VStack,
  Button,
  ButtonText,
  Input,
  InputField,
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  Select,
  SelectTrigger,
  Icon,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import QRCode from "react-native-qrcode-svg";
import QRModal from "../components/QRModal";

function QR() {
  const [myDictionary, setMyDictionary] = useState({});

  // Suggested amounts
  const suggestedLitres = [1, 2, 5, 8, 10, 15, 20];
  const suggestedAmounts = [500, 1000, 1500, 2000, 3000];

  const [buyByAmount, setBuyByAmount] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(suggestedAmounts);
  const [showModal, setShowModal] = useState(false);
  const [fuelType, setFuelType] = useState("Petrol");

  const handleAmountClick = () => {
    if (!buyByAmount) {
      setInputValue("");
      setBuyByAmount(true);
      setSuggestions(suggestedAmounts);
    }
  };

  const handleLitresClick = () => {
    if (buyByAmount) {
      setInputValue("");
      setBuyByAmount(false);
      setSuggestions(suggestedLitres);
    }
  };

  const handleInputChange = (value: any) => {
    // Ensure only numeric input
    if (/^\d+$/.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const handleSuggestedAmountClick = (amount: any) => {
    setInputValue(String(amount));
  };

  const handleSelectChange = (value: any) => {
    setFuelType(value);
  };

  const toast = useToast();

  const handleGenerateQR = () => {
    if (inputValue) {
      if (buyByAmount && Number(inputValue) < 100) {
        toast.show({
          placement: "top",
          render: ({ id }) => {
            return (
              <Toast nativeID={"toast-" + id} action="error" variant="solid">
                <VStack space="xs">
                  <ToastTitle>Error</ToastTitle>
                  <ToastDescription>
                    Amount cant be less than 100
                  </ToastDescription>
                </VStack>
              </Toast>
            );
          },
        });
        return;
      }
      const dict = {
        amount: inputValue,
        product: fuelType,
        location: "PSO",
      };
      setMyDictionary(dict);
      setShowModal(true);
      return;
    }

    toast.show({
      placement: "top",
      render: ({ id }) => {
        return (
          <Toast nativeID={"toast-" + id} action="error" variant="solid">
            <VStack space="xs">
              <ToastTitle>Error</ToastTitle>
              <ToastDescription>
                {buyByAmount
                  ? "Enter the amount"
                  : "Enter the number of litres"}
              </ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return (
    <View style={[styles.container]}>
      <ScrollView>
        <View style={[styles.shadowStyle, { margin: "2%" }]}>
          <Text style={{ alignSelf: "center" }}>Buy Fuel Through</Text>

          {/* these are the buttons of amount and litre */}
          {buttonTab(buyByAmount, handleAmountClick, handleLitresClick)}
        </View>

        {/* this is the input for amoun and no. of litres */}
        {amountEntrySection(
          inputValue,
          handleInputChange,
          buyByAmount,
          suggestions,
          handleSuggestedAmountClick
        )}

        {/* this is the slection for fuel type */}
        {fuelSelectSection(fuelType, handleSelectChange)}

        {/* generate qr code button opens a modal */}
        <Button
          size="sm"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={true}
          style={{
            alignSelf: "center",
            marginTop: "10%",
            backgroundColor: "#33d6ff",
            minWidth: "35%",
          }}
          onPress={handleGenerateQR}
        >
          <ButtonText>Generate QR</ButtonText>
        </Button>

        <QRModal
          showModal={showModal}
          setShowModal={setShowModal}
          myDictionary={myDictionary}
        />
      </ScrollView>
    </View>
  );
}

export default QR;

const buttonTab = (
  buyByAmount: any,
  handleAmountClick: any,
  handleLitresClick: any
) => {
  return (
    <View style={[styles.buttonTabView]}>
      <Button
        size="sm"
        variant="outline"
        action={buyByAmount ? "primary" : "secondary"}
        isDisabled={false}
        isFocusVisible={true}
        onPress={handleAmountClick}
      >
        <ButtonText>Amount</ButtonText>
      </Button>

      <Button
        size="sm"
        variant="outline"
        action={buyByAmount ? "secondary" : "primary"}
        isDisabled={false}
        isFocusVisible={false}
        onPress={handleLitresClick}
      >
        <ButtonText>Litres</ButtonText>
      </Button>
    </View>
  );
};

const amountEntrySection = (
  inputValue: any,
  handleInputChange: any,
  buyByAmount: any,
  suggestions: any,
  handleSuggestedAmountClick: any
) => {
  return (
    <View style={[styles.shadowStyle, { margin: "2%", padding: "2%" }]}>
      <View style={styles.inputFieldView}>
        <Input
          variant="rounded"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          style={{ minWidth: "70%" }}
        >
          <InputField
            keyboardType="numeric"
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder={
              buyByAmount ? "Enter Amount here" : "Enter Litres here"
            }
          />
        </Input>
      </View>
      {/* Suggested amounts */}
      <View style={styles.suggestedAmountText}>
        {suggestions.map((amount: any, index: any) => (
          <Text
            key={index}
            style={styles.suggestedAmountText}
            onPress={() => handleSuggestedAmountClick(amount)}
          >
            {" " + amount + " "}
          </Text>
        ))}
      </View>
    </View>
  );
};

const fuelSelectSection = (fuelType: any, handleSelectChange: any) => {
  return (
    <View
      style={[
        styles.shadowStyle,
        {
          marginTop: "6%",
          alignSelf: "center",
          minWidth: "70%",
          padding: "2%",
        },
      ]}
    >
      <Text
        style={{
          alignSelf: "center",
          marginBottom: "3%",
          fontWeight: "bold",
        }}
      >
        Fuel Type
      </Text>
      <Select onValueChange={handleSelectChange} defaultValue={fuelType}>
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
            <SelectItem label="Petrol" value="petrol" />
            <SelectItem label="Super Unleaded" value="superUnleaded" />
            <SelectItem label="Diesel" value="diesel" />
            <SelectItem label="CNG" value="cng" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    margin: "2%",
    backgroundColor: "rgba(0,0,0,0)",
    display: "flex",
    flex: 1,
  },
  buttonTabView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "lightblue",
    padding: "2%",
    margin: "2%",
  },
  inputFieldView: {
    alignSelf: "center",
    minWidth: "50%",
    marginTop: "3%",
    marginBottom: "3%",
  },
  suggestedAmountText: {
    fontSize: 16,
    textDecorationLine: "underline",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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
