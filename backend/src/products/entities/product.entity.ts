import { BusinessRuleException } from 'src/_share/business-rule-exception';
import { InvalidAttributeException } from 'src/_share/invalid-attribute-exception';

type ProductProps = {
  id?: string;
  category_id: string;
  category_name: string;
  name: string;
  price: number;
  availability: boolean;
};

type ImageProps = {
  id?: string;
  bytes: Buffer;
  mimetype: string;
  product_id: string;
};

export class Image {
  id: string;
  bytes: Buffer;
  mimetype: string;
  product_id: string;

  constructor(props: ImageProps) {
    if (!props.product_id) {
      throw new BusinessRuleException(
        "Can't add an image to an unsaved product",
      );
    }

    this.id = props.id;
    this.bytes = props.bytes;
    this.mimetype = props.mimetype;
    this.product_id = props.product_id;
  }
}

export class Product {
  id?: string;
  category_id: string;
  category_name: string;
  name: string;
  price: number;
  availability: boolean;
  image?: Image;

  constructor(props: ProductProps) {
    this.id = props.id;
    this.updateName(props.name);
    this.updatePrice(props.price);
    this.updateAvailability(props.availability);
    this.addCategory({ ...props });
  }

  updateName(name: string) {
    if (!name || !name.trim()) {
      throw new InvalidAttributeException('name should not be empty');
    }

    this.name = name;
  }

  addCategory(props: { category_id: string; category_name: string }) {
    if (!props.category_id || !props.category_id.trim()) {
      throw new InvalidAttributeException('categoryId is required');
    }

    if (!props.category_name || !props.category_name.trim()) {
      throw new InvalidAttributeException('categoryName should not be empty');
    }

    this.category_id = props.category_id;
    this.category_name = props.category_name;
  }

  updatePrice(price: number) {
    const min = 0.01;
    const max = 999999999.99;

    if (!price) {
      throw new InvalidAttributeException('price is required');
    }

    if (price < min || price > max) {
      throw new InvalidAttributeException(
        `price must be greater than ${min} and less than ${max}`,
      );
    }

    this.price = price;
  }

  updateAvailability(availability = true) {
    this.availability = availability;
  }

  addImage(bytes: Buffer, mimetype: string) {
    this.image = new Image({ bytes, mimetype, product_id: this.id });
  }
}
