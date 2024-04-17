import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Divider,
  Center,
  VStack,
  Button,
  ButtonText,
  FormControlError,
  FormControlHelper,
  FormControlHelperText,
  FormControl,
  FormControlLabel,
  AlertCircleIcon,
  InputField,
  Input,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabelText,
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

function UpdateProfile() {
  const route = useRoute();
  const { setName, name } = route.params;
  const navigation = useNavigation();

  const [input, setInput] = useState("");

  const toast = useToast();

  const handlePress = () => {
    if (input.trim().length >= 4 && input.trim().length <= 15) {
      setName(input.trim());
      navigation.goBack();
    } else {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="solid">
              <VStack space="xs">
                <ToastTitle>Error</ToastTitle>
                <ToastDescription>Name legnth is Invalid</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
      return;
    }
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={{ height: "100%" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: "2%",
          }}
        >
          Update Profile
        </Text>
        <Text style={{ alignSelf: "center", marginBottom: "10%" }}>
          Current Name: {name}
        </Text>

        <FormControl
          size="md"
          isDisabled={false}
          isInvalid={input.trim().length < 4 ? true : false}
          isReadOnly={false}
          isRequired={true}
          style={styles.formStyle}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>Name:</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={input}
              type="text"
              defaultValue=""
              placeholder="Name"
              onChangeText={(text) => setInput(text)}
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Must be at least 3 to 15 characters.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              At least 3 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        {/* phone Number */}

        <FormControl
          size="md"
          isDisabled={true}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
          style={styles.formStyle}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>Phone No.</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              // value={input}
              type="text"
              defaultValue=""
              placeholder="Contact #"
              onChangeText={(text) => setInput(text)}
            />
          </Input>
          <FormControlHelper>
            {/* <FormControlHelperText>
              Must be at least 4 characters.
            </FormControlHelperText> */}
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              At least 4 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        {/* email */}

        <FormControl
          size="md"
          isDisabled={true}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
          style={styles.formStyle}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              // value={input}
              type="text"
              defaultValue=""
              placeholder="abc@gmail.com"
              onChangeText={(text) => setInput(text)}
            />
          </Input>
          <FormControlHelper>
            {/* <FormControlHelperText>
              Must be at least 4 characters.
            </FormControlHelperText> */}
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              At least 4 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <Button onPress={handlePress} style={styles.changeButton}>
          <ButtonText>Update</ButtonText>
        </Button>
      </View>
    </ImageBackground>
  );
}

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // backgroundColor: "cyan",
    marginHorizontal: "10%",
    marginVertical: "30%",
  },
  formStyle: {
    marginTop: "2%",
    marginBottom: "2%",
  },

  changeButton: {
    alignSelf: "center",
    maxHeight: "50%",
    backgroundColor: "#33d6ff",
    marginTop: "5%",
  },
});
