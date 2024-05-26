import React, { useEffect } from 'react';
import { NativeBaseProvider, StatusBar, Text } from 'native-base'; // Importe o componente Text
import { AuthProvider } from './src/contexts/auth.context';
import { CartProvider } from './src/contexts/CartContext';
import { TimerProvider, useTimer } from './src/contexts/useTimer';
import StackComponent from './src/routes/Stack';
import { AppState, TouchableWithoutFeedback, View } from 'react-native';

const AppContent = () => {
  const { resetTimer } = useTimer();

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', (nextAppState) => {
  //     if (nextAppState === 'active') {
  //       resetTimer();
  //     }
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, [resetTimer]);

  const handleTouch = () => {
    resetTimer();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={{ flex: 1 }}>
        <NativeBaseProvider>
          <StackComponent />
        </NativeBaseProvider>
      </View>
    </TouchableWithoutFeedback>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AuthProvider>
          <StatusBar hidden />
          <TimerProvider>
              <AppContent />
          </TimerProvider>
        </AuthProvider>
    </CartProvider>
  );
};

export default App;