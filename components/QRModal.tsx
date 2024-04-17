import React from "react";
import {
  View,
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
import QRCode from "react-native-qrcode-svg";

function QRModal(props: any) {
  const generateQRString = (data: any) => {
    const jsonString = JSON.stringify(data);
    return jsonString;
  };

  const data = generateQRString(props.myDictionary);

  return (
    <View>
      <Modal
        isOpen={props.showModal}
        onClose={() => {
          props.setShowModal(false);
        }}
      >
        <ModalBackdrop onPress={() => {}} />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Your QR Code</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <View style={{ alignSelf: "center" }}>
              <QRCode value={data} size={200} />
            </View>
          </ModalBody>
          <ModalFooter>
            <Button
              size="sm"
              action="negative"
              borderWidth="$0"
              onPress={() => {
                props.setShowModal(false);
              }}
            >
              <ButtonText>Re Generate QR</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
}

export default QRModal;
