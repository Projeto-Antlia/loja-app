import { HStack, KeyboardAvoidingView, NativeBaseProvider, Text, Image, Pressable, Box } from "native-base";
import React from "react";


export default function TotalMkt() {
    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView>
                <HStack bg='#fff' alignItems={'center'} justifyContent={'space-around'} h='100px'>
                    <Text color='#626262' fontSize={20} style={{ fontFamily: 'Rubik_400Regular' }}>
                        TOTAL
                    </Text>
                    <Text fontSize={25} style={{ fontFamily: 'Rubik_600SemiBold' }}>
                        R$: 17,50
                    </Text>
                </HStack>
                <Pressable   >
                    <Box bg="#ffbf1a" h='100px' alignItems={'center'} justifyContent={'center'}  >
                        <Text color="#000" style={{ fontFamily: 'Rubik_600SemiBold' }} fontSize="25" >
                            CONFIRMAR COMPRA
                        </Text>
                    </Box>
                </Pressable>
            </KeyboardAvoidingView>
        </NativeBaseProvider>
    )
}