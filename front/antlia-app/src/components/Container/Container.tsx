import { StatusBar } from "expo-status-bar";
import { Box, HStack, VStack } from "native-base";

type Props ={
    children: React.ReactNode;
}

const styles = {
    main: {
        flexGrow: 1,
        backgroundColor: '#E9E9E9',
        "justify-content": 'center',
        padding: 40,
    },
}

export default function Container(props: Props) {
    return (
        <VStack style={styles.main}>
            {props.children}
        </VStack>
    );
}
