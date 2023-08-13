import { Injectable } from '@nestjs/common';
import { Invoice } from '../entities/invoice.entity';
import { InvoiceRepository } from './invoice.repository';

@Injectable()
export class InvoiceMemoryRepository implements InvoiceRepository {
  create(invoice: Invoice): Promise<Invoice> {
    throw new Error('Method not implemented.');
  }
  update(invoice: Invoice): Promise<Invoice> {
    throw new Error('Method not implemented.');
  }
  findOpenedInvoiceByCustomerId(customer_id: string): Promise<Invoice> {
    throw new Error('Method not implemented.');
  }
}
