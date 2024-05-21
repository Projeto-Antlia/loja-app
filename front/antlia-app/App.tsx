import { NativeBaseProvider, StatusBar } from "native-base";
import { AuthProvider } from "./src/contexts/auth.context";
import { CartProvider } from "./src/contexts/CartContext";
import StackComponent from "./src/routes/Stack";


const App = () => {
  return (
    <CartProvider>
    <AuthProvider>
      <StatusBar hidden />
        <NativeBaseProvider>
          <StackComponent />
        </NativeBaseProvider>
    </AuthProvider>
    </CartProvider>
  );
};

export default App;
