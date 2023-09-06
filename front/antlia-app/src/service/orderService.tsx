import { CartItem } from '../contexts/CartContext';

// Função para criar um objeto de pedido com base nos itens do carrinho
export const createOrderFromCart = (cartItems: Record<string, CartItem>): Order => {
  // Suponha que você já tenha os detalhes do cliente (customer_id e customer_name)
  const customer_id = "c7fa804e-0c31-4108-a059-f6412bf83f53";
  const customer_name = "Douglas";

  // Mapeie os itens do carrinho no formato necessário para order_items
  const order_items = Object.values(cartItems).map((item) => ({
    product_id: item.product_id,
    quantity: item.quantidade || 0, // Certifique-se de lidar com valores ausentes
  }));

  // Crie o objeto de pedido
  const order: Order = {
    customer_id,
    customer_name,
    order_items,
  };

  return order;
};

// Interface para representar a estrutura de um pedido
interface Order {
  customer_id: string;
  customer_name: string;
  order_items: OrderItem[];
}

// Interface para representar a estrutura de um item de pedido
interface OrderItem {
  product_id: string;
  quantity: number;
}