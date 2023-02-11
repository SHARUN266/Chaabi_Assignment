import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import Form from "../components/Form";

export default function Login({ isOpen, onClose, onOpen }) {
  return (
    <Modal
      size={["md", "lg", "4xl"]}
      isOpen={isOpen}
   
      onOpen={onOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <Form onClose={onClose} />
      </ModalContent>
    </Modal>
  );
}
