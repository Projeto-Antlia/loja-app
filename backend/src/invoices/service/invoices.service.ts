import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';
import { Order } from 'src/orders/entities/order.entity';
import { BillStatus, Invoice } from '../entities/invoice.entity';
import { InvoiceRepository } from '../repository/invoice.repository';
import { BusinessRuleException } from 'src/_share/business-rule-exception';

const BILLING_OPEN_DAY = 20;

@Injectable()
export class InvoicesService {
  constructor(private readonly invoiceRepository:InvoiceRepository){};

  // must not have create a new invoice if already invoice exists with opended status
  async openInvoice(createInvoiceDto: CreateInvoiceDto) {
    const existsInvoice = await this.invoiceRepository.findOpenedInvoiceByCustomerId(
      createInvoiceDto.customer_id
    )

    if(existsInvoice) {
      return existsInvoice;
    }

    const invoice = new Invoice({
      customer_id: createInvoiceDto.customer_id,
      customer_name: createInvoiceDto.customer_name,
      bill_status: BillStatus.OPENDED,
      start_at: new Date(),
    });

    return await this.invoiceRepository.create(invoice);
  }

  async closeInvoice(invoice: Invoice): Promise<Invoice> {
    if (!invoice) {
      throw new BusinessRuleException('Invoice is required')
    }

    invoice.close()

    return await this.invoiceRepository.update(invoice);
  }

  async addTransaction(order: Order) {
    let invoice = await this.findOpenedInvoiceByCustomerId(order.customer_id);
    invoice.addItem(order);
    await this.invoiceRepository.update(invoice);
  }

  //Is used to find in database a invoice with opened status from client
  async findOpenedInvoiceByCustomerId(customer_id: string) {
    let invoice = await this.invoiceRepository.findOpenedInvoiceByCustomerId(customer_id);

    if(!invoice) {
      invoice = await this.openInvoice({
        customer_id: customer_id,
        customer_name: '',
      })
    }

    return invoice;
  }

  findAll() {
    return `This action returns all invoices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
