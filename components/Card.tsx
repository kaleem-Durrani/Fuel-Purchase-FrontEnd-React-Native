import React, { ReactNode } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  DimensionValue,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CardProps {
  logo: ImageSourcePropType;
  text: string | ReactNode; // Allow string or React element
  width: DimensionValue;
  height: DimensionValue;
  logoWidth: DimensionValue;
  logoHeight: DimensionValue;
  onPress?: () => void; // Function to be called on card press
}

const Card: React.FC<CardProps> = ({
  logo,
  text,
  width,
  height,
  logoWidth,
  logoHeight,
  onPress,
}) => {
  //   const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, { height: height, width: width }]}
    >
      <View>
        <Image
          source={logo}
          style={{ width: logoWidth, height: logoHeight }}
          resizeMode="contain"
        />

        {text ? <Text style={[styles.text, {}]}>{text}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff", // Adjust background color as needed
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    elevation: 3,
  },
  logo: {
    width: 57, // Set the desired width for the logo
    height: 57, // Set the desired height for the logo
    // marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    // color: "cyan",
  },
});

export default Card;
