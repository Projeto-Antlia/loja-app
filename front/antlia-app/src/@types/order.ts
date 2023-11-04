export type OrderItem = {
    id:string;
    product_id:string;
    product_name:string;
    quantity:number;
    subtotal:number;
}

export type Order = {
    id:string;
    customer_id:string;
    customer_name:string;
    total:number;
    created_at:string;
    order_items:OrderItem[];
}