import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Definir o tipo para os itens do carrinho
export interface CartItem {
  product_id: string;
  category_id:string;
  name?: string;
  image?: string;
  price?: string;
  quantidade?:number
}

// Definir o tipo do estado do carrinho
interface CartState {
  items: {[product_id: string]:CartItem};
}

// Definir as ações do reducer
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'INCREMENT_ITEM'; payload:string}
  | { type: 'DECREMENT_ITEM'; payload:string}
  | { type: 'CLEAR_CART' };

// Definir o tipo do contexto
interface CartContextType {
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
}

// Criar o contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);

// Componente de provedor de contexto
interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const initialState: CartState = {
    items: {},
  };

  const [cartState, cartDispatch] = useReducer(
    (state: CartState, action: CartAction) => {
      switch (action.type) {
        case 'ADD_ITEM':
          
          const newItem = action.payload;
          const updatedItems = { ...state.items };

          console.log('CartContext ----->', newItem)

          // Verifique se o item já existe no carrinho
          const itemEntries = Object.entries(updatedItems);

          // Verifique se o item já existe no carrinho
          const existingItemIndex = itemEntries.findIndex(
            ([productId, _]) => productId === newItem.product_id
          );

          if (existingItemIndex !== -1) {
            // Se o item já existe, atualize a quantidade
            const [productId, existingItem] = itemEntries[existingItemIndex];

            // Defina um valor padrão para existingItem.quantidade
            const quantidade = newItem.quantidade || 1;

            existingItem.quantidade =   quantidade;

            updatedItems[productId] = existingItem;
          } else {
            // Caso contrário, adicione um novo item
            updatedItems[newItem.product_id] = newItem;
          }
          return { ...state, items: updatedItems };
          case 'INCREMENT_ITEM':
            const itemIdToIncrement = action.payload;
            const incrementedItems = state.items ? { ...state.items } : {};

            console.log('CartINCREMENTContext ----->', itemIdToIncrement)
  
            if (itemIdToIncrement in incrementedItems) {
              incrementedItems[itemIdToIncrement] = {
                ...incrementedItems[itemIdToIncrement],
                quantidade: (incrementedItems[itemIdToIncrement].quantidade || 0) + 1,
              };
            }
            return { ...state, items: incrementedItems };
          case 'DECREMENT_ITEM':
            const itemIdToDecrement = action.payload;
            const decrementedItems = state.items ? { ...state.items } : {};

            console.log('CartDEINCREMENTContext ----->', itemIdToDecrement)
  
            if (itemIdToDecrement in decrementedItems) {
              decrementedItems[itemIdToDecrement] = {
                ...decrementedItems[itemIdToDecrement],
                quantidade: (decrementedItems[itemIdToDecrement].quantidade || 0) - 1,
              };
            }
            return { ...state, items: decrementedItems };
        case 'REMOVE_ITEM':
          const itemIdToRemove = action.payload;
          const filteredItems = { ...state.items }!;

          if (itemIdToRemove in filteredItems) {
            // Remova o item do carrinho
            delete filteredItems[itemIdToRemove];
          }
          return { ...state, items: filteredItems };
          case 'CLEAR_CART': // Manipule a ação 'CLEAR_CART' aqui
          return { ...state, items: {} }; // Limpe os itens do carrinho
        default:
          return state;
      }
    },
    initialState
  );

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto do carrinho
const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro do CartProvider');
  }
  return context;
};

export { CartProvider, useCart };