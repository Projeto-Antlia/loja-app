import { Box, Pressable, Text, VStack } from "native-base";
import React, { useState } from "react";
import { Keyboard, Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { TextInput } from 'react-native-paper';
import theme from "../../theme";


interface ModalAuthProps {
    isVisible: boolean
    onClose: () => void
};

export const ModalAuth: React.FC<ModalAuthProps> = ({
    isVisible,
    onClose,
}) => {
    const [password, setPassword] = useState("");
    const [showPassord, setShowPassord] = useState(false);
    const [cpf, setCpf] = useState<string>("");
    const textInputRef = React.useRef<TextInputMask | null>(null);
    const handleCpfChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, "");
        setCpf(numericValue);
    }
    const showCpf = () => {
        console.log("cpf",cpf)
        console.log("senha",password)
    };

    const handlePress = () => {
        setTimeout(() => {
            Keyboard.dismiss();
        }, 0); // Ajuste o valor conforme necessário
    };
    return (
        <ScrollView >
            <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={onClose}>
                <TouchableOpacity onPress={handlePress}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    activeOpacity={1}>
                    <View
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }} />
                    <VStack px="5%" py="5%" w="50%" h="350" bg={theme.colors.white} rounded={30}>
                        <Pressable onPress={onClose} display="flex" alignItems={"flex-end"}>
                            <Text>X</Text>
                        </Pressable>
                        <Box alignItems={"center"} justifyContent={"space-evenly"} h='100%' >
                            <Text fontFamily={theme.fonts.semiBold} fontSize="20">
                                Credenciais
                            </Text>
                            <TextInput
                                label="CPF"
                                mode="outlined"
                                dense
                                value={cpf}
                                style={{ width: 250 }}
                                render={({ ...props }) => (
                                    <TextInputMask
                                        {...props}
                                        type={"cpf"}
                                        value={cpf}
                                        onChangeText={handleCpfChange}
                                        ref={(ref) => (textInputRef.current = ref)}
                                        keyboardType="numeric" />
                                )} />

                            <TextInput
                                label="Senha"
                                mode="outlined"
                                dense
                                value={password}
                                secureTextEntry={!showPassord}
                                onChangeText={setPassword}
                                right={
                                    <TextInput.Icon
                                        icon={showPassord ? "eye-off" : "eye"}
                                        onPress={() => setShowPassord(!showPassord)}
                                    />}
                                style={{ width: 250 }}/>

                            <Pressable //botao add
                                justifyContent={"center"}
                                rounded={"10"}
                                h="20%"
                                alignItems={"center"}
                                w="100%"
                                bg={theme.colors.primary}
                                mt="8%"
                                onPress={showCpf}>
                                <Text fontFamily={theme.fonts.semiBold} fontSize="15">
                                    ADICIONAR
                                </Text>
                            </Pressable>
                        </Box>
                    </VStack>
                </TouchableOpacity>
            </Modal>
        </ScrollView>
    )
}