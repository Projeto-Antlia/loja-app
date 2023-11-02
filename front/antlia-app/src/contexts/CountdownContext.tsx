import React, { createContext, useContext, useState, useEffect,ReactNode } from 'react';
import { useAuth } from './auth.context';

interface CountdownContextType{
    seconds: number;
    startCountdown: () => void;
}

const CountdownContext = createContext<CountdownContextType | undefined>(undefined);

export const useCountDown =() => {
    const context = useContext(CountdownContext);
    if(!context){
        throw new Error('useCountDown must be used within a CountdownProvider');
    }
    return context;
};

interface CountdownProviderProps {
    children: ReactNode;
  }

export const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
    const { logout } = useAuth();
    const [seconds, setSeconds] = useState(15);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      if (seconds === 0) {
        if (intervalId) clearInterval(intervalId);
        logout();
      }
    }, [seconds]);
  
    const startCountdown = () => {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(id);
    };
  
    const value = {
      seconds,
      startCountdown,
    };
  
    return <CountdownContext.Provider value={value}>{children}</CountdownContext.Provider>;
  };