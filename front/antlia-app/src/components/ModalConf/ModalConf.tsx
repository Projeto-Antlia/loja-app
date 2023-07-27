import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Text,
  View,
  NativeBaseProvider,
  Modal,
} from 'native-base';

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} animationPreset="fade">
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>
          Modal Title
        </Modal.Header>
        <Modal.Body>
          <Text>
            This is the modal content.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button colorScheme="secondary" onPress={onClose}>
              Close
            </Button>
            <Button colorScheme="primary">
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default MyModal;