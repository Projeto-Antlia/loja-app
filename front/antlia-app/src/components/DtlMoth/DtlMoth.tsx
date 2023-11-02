import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Box, HStack, KeyboardAvoidingView, NativeBaseProvider, Text } from "native-base";
import { useEffect, useState } from 'react';
import apiService from '../../utils/api';
import { useAuth } from '../../contexts/auth.context';
import { formatDate } from '../../utils/date-helpers';


export default function DtlMoth() {
    const {user} = useAuth();
    const [invoice, setInvoice] = useState();
    

    useEffect(()=>{
        if(!user) return;
        apiService.get(`/billing/customers/${user?.profile_id}/current-invoice`).then(res => setInvoice(res.data))


    },[])
    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView
            >
                <HStack bg='#502275' w='100%' h='150px' justifyContent={'space-around'} alignItems={'center'}>
                    <Box >
                        <Text color='#fff' style={{fontFamily: 'Rubik_400Regular' }}>
                            DESPESA ATUAs{'\n'}R$ {invoice?.total?.toFixed(2) || 0}
                        </Text>
                    </Box>
                    <Text color='#fff' style={{ fontFamily: 'Rubik_400Regular' }}>FECHA EM {'\n'} {formatDate(invoice?.end_at)}</Text>
                </HStack>
            </KeyboardAvoidingView>
        </NativeBaseProvider >
    )
}