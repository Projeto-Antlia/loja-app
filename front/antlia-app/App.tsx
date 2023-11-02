import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from "./src/contexts/auth.context";
import StackComponent from './src/routes/Stack';
import { CountdownProvider, useCountDown } from './src/contexts/CountdownContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <CountdownProvider>
        <NativeBaseProvider>
          <StackComponent />
        </NativeBaseProvider>
      </CountdownProvider>
    </AuthProvider>
  );
}

