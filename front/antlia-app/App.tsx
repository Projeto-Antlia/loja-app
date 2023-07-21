import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import StackComponent from './src/routes/Stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <StackComponent />
    </NativeBaseProvider>
  );
}

