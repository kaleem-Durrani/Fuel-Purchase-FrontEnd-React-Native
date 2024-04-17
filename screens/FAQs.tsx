import React from "react";
import { View } from "@gluestack-ui/themed";
import { StyleSheet, Button, ScrollView, Text } from "react-native";

function FAQs() {
  return (
    <View style={[styles.container, styles.shadowStyle]}>
      <ScrollView>
        <Text style={styles.heading}>General FAQs:</Text>
        <Text style={styles.question}>What is PakFuel ?</Text>
        <Text style={styles.answer}>
          PakFuel is a fueling app designed to streamline the process of
          refueling your vehicle. It allows you to find nearby fuel stations,
          track your fuel expenses, and make payments seamlessly.
        </Text>
        <Text style={styles.question}>How do I download [App Name]?</Text>
        <Text style={styles.answer}>
          [App Name] is available for download on [App Store/Google Play].
          Simply visit the respective store on your device, search for [App
          Name], and click the download/install button.
        </Text>
        <Text style={styles.question}>Is [App Name] free to use?</Text>
        <Text style={styles.answer}>
          Yes, [App Name] is free to download and use. However, certain features
          or premium services may require in-app purchases.
        </Text>
        <Text style={styles.heading}>Fueling Process:</Text>
        <Text style={styles.question}>
          How do I initiate the fueling process with [App Name]?
        </Text>
        <Text style={styles.answer}>
          Once at the fuel station, open [App Name], select the station you're
          at, and follow the on-screen instructions to initiate the fueling
          process. You may also choose to pay within the app.
        </Text>
        <Text style={styles.question}>
          Can I make payments through [App Name]?
        </Text>
        <Text style={styles.answer}>
          Yes, [App Name] provides a secure payment gateway, allowing you to pay
          for fuel directly within the app. Simply link your preferred payment
          method.
        </Text>
        <Text style={styles.heading}>Account and Security:</Text>
        <Text style={styles.question}>
          Is my personal and payment information secure with [App Name]?
        </Text>
        <Text style={styles.answer}>
          Absolutely. [App Name] prioritizes user security and employs
          industry-standard encryption protocols to safeguard your personal and
          payment information.
        </Text>
        <Text style={styles.question}>
          How do I create an account on [App Name]?
        </Text>
        <Text style={styles.answer}>
          To create an account, open [App Name], click on the "Sign Up" or
          "Create Account" option, and follow the prompts to enter your details.
          You may also have the option to sign up using your existing social
          media accounts.
        </Text>
        <Text style={styles.heading}>Troubleshooting:</Text>
        <Text style={styles.question}>
          I'm having issues with the app. What should I do?
        </Text>
        <Text style={styles.answer}>
          If you encounter any issues, try the following steps:
          {"\n\n"}
          {"\u2022"} Check your internet connection.{"\n"}
          {"\u2022"} Ensure you have the latest version of [App Name].{"\n"}
          {"\u2022"} Restart the app or your device.{"\n"}
          {"\u2022"} Contact our support team via [support email/phone number].
        </Text>
        <Text style={styles.question}>
          What should I do if the fuel station is not listed in [App Name]?
        </Text>
        <Text style={styles.answer}>
          If a fuel station is not listed, you can suggest it to us within the
          app, and our team will work to add it to our database.
        </Text>
      </ScrollView>
    </View>
  );
}

export default FAQs;

const styles = StyleSheet.create({
  container: {
    margin: "4%",
    marginTop: "6%",
    // backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "2%",
  },
  heading: {
    paddingTop: "6%",
    marginBottom: "7%",
    fontWeight: "bold",
    fontSize: 30,
  },
  question: {
    fontSize: 17,
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: "0.1%",
    // color: "$textDark900",
  },
  answer: {
    fontSize: 13,
    marginBottom: "4%",
  },
  shadowStyle: {
    elevation: 5, // Add elevation for Android shadows
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    padding: 16,
    backgroundColor: "white", // Set a background color if needed
    borderRadius: 8, // Set border radius if needed
  },
});
