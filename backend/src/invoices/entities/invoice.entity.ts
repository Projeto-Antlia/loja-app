import { BusinessRuleException } from "src/_share/business-rule-exception";
import { Order } from "src/orders/entities/order.entity";

export enum BillStatus {
    OPENDED,
    CLOSED
}


type InvoiceProps = {
    id?: string;
    customer_id: string;
    customer_name: string;
    bill_status: BillStatus;
    start_at: Date;
    end_at?: Date;
    transactions?: Order[];
}

export class Invoice {
    id?: string;
    customer_id: string;
    customer_name: string;
    bill_status: BillStatus;
    start_at: Date;
    end_at?: Date;
    transactions?: Order[];

    constructor(props: InvoiceProps){
        this.id = props.id;
        this.customer_id = props.customer_id;
        this.customer_name = props.customer_name;
        this.bill_status = props.bill_status;
        this.start_at = props.start_at;
        this.end_at = props.end_at;
        this.transactions = props.transactions || [];
    }
    addItem(order: Order) {
        this.transactions.push(order);
    }

    close() {
        if (this.bill_status !== BillStatus.OPENDED) {
            throw new BusinessRuleException('Invoice must be opended status')
        }

        this.bill_status = BillStatus.CLOSED;
    }
}
