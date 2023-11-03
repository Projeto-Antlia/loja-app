export type Invoice = {
    id: string;
    customer_id: string;
    bill_status: string;
    pay_status: 'PAID' | 'PENDING';
    start_at: string;
    end_at: string;
    total_paid: number;
    total: number;
}