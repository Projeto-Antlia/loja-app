import React, {createContext, useReducer, useContext, useEffect, ReactNode } from 'react';
import { AppState, InteractionManager } from 'react-native';
import { useAuth } from "../contexts/auth.context";


//States and actions
interface State {
    timeRemaining: number;
    isLoggedOut:boolean;
}

interface Action {
    type: typeof RESET_TIMER | typeof TICK | typeof LOGOUT;
}

//Setting timer actions
const RESET_TIMER = 'RESET_TIMER';
const TICK = 'TICK';
const LOGOUT = 'LOGOUT';

//duration of timer (4 minutos)
const TIMER_DURATION = 1*60;

//Initial State
const initialState:State = {
    timeRemaining: TIMER_DURATION,
    isLoggedOut: false,
};

//Reducer of state
const timerReducer = (state:State, action:Action):State => {
  
    switch(action.type){
        case RESET_TIMER:
            return { ...state, timeRemaining: TIMER_DURATION, isLoggedOut: false};
        case TICK:
            return {
                ...state,
                timeRemaining: state.timeRemaining > 0 ? state.timeRemaining - 1: 0,
                isLoggedOut: state.timeRemaining ===0,
            };
        case LOGOUT:
          
            return { ...state, isLoggedOut:true};
        default:
            return state;            
    }
};

//create context
const TimerContext = createContext<{ state: State; resetTimer: () => void } | undefined>(undefined);



interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  useEffect(() => {
    let animationFrameId: number | NodeJS.Timeout;

    const updateTimeRemaining = () => {
      dispatch({ type: TICK });
      if (state.timeRemaining > 0) {
        if (state.timeRemaining <= 60) {
          animationFrameId = requestAnimationFrame(updateTimeRemaining);
        } else {
          animationFrameId = setTimeout(updateTimeRemaining, 10000);
        }
      }
    };

    updateTimeRemaining();

    return () => {
      if (typeof animationFrameId === 'number') {
        // console.log("animationFrameId", animationFrameId);
        cancelAnimationFrame(animationFrameId);
      } else {
        clearTimeout(animationFrameId);
      }
    };
  }, [state.timeRemaining]);

  const resetTimer = () => {
    dispatch({ type: RESET_TIMER });
  };

  // useEffect(() => {
  //   console.log('timeRemaining')
  //   if (state.timeRemaining === 0) {
  //     logout();
  //     dispatch({ type: LOGOUT });
  //   }
  // }, [state.timeRemaining]);

  const values = {
      state,
      resetTimer
    }

  return <TimerContext.Provider value={values}>{children}</TimerContext.Provider>

}

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
      throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
