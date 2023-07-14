import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text } from "native-base";

export default function DtlMoth() {
    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView
            >
                <HStack bg='#502275' w='100%' h='150px' justifyContent={'space-around'} alignItems={'center'}>
                    <Box >
                        <Text color='#fff' style={{fontFamily: 'Rubik_400Regular' }}>
                            DESPESA ATUAL{'\n'}*valor da compra no mês*
                        </Text>
                    </Box>
                    <Text color='#fff' style={{ fontFamily: 'Rubik_400Regular' }}>FECHA EM *DATA*</Text>
                </HStack>
            </KeyboardAvoidingView>
        </NativeBaseProvider >
    )
}