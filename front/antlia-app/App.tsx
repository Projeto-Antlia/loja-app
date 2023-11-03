import { NativeBaseProvider, StatusBar } from "native-base";
import { AuthProvider } from "./src/contexts/auth.context";
import StackComponent from "./src/routes/Stack";
import {
  CountdownProvider,
  useCountDown,
} from "./src/contexts/CountdownContext";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar hidden />
      <CountdownProvider>
        <NativeBaseProvider>
          <StackComponent />
        </NativeBaseProvider>
      </CountdownProvider>
    </AuthProvider>
  );
}
