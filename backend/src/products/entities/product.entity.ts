import { BusinessRuleException } from "src/@share/business-rule-exception";
import { InvalidAttributeException } from "src/@share/invalid-attribute-exception";

type ProductProps = {
  id?: string;
  categoryId: string;
  categoryName: string;
  name: string;
  price: number;
  availability: boolean;
};

type ImageProps = {
  id?: string;
  bytes: Buffer;
  mimetype: string;
  productId: string;
}

export class Image {
  id: string;
  bytes: Buffer;
  mimetype: string;
  productId: string;

  constructor(props: ImageProps){
    
    if (!props.productId) {
      throw new BusinessRuleException("Can't add an image to an unsaved product");
    }

    this.id = props.id;
    this.bytes = props.bytes;
    this.mimetype = props.mimetype;
    this.productId = props.productId;
  }
}

export class Product {
  id?: string;
  categoryId: string;
  categoryName: string;
  name: string;
  price: number;
  availability: boolean;
  image?: Image;

  constructor(props: ProductProps) {
    this.id = props.id;
    this.updateName(props.name)
    this.updatePrice(props.price)
    this.updateAvailability(props.availability)
    this.addCategory({ ...props })
  }

  updateName(name: string) {
    if (!name || !name.trim()) {
      throw new InvalidAttributeException('name should not be empty')
    }

    this.name = name;
  }

  addCategory(props : { categoryId: string; categoryName: string; }) {
    if (!props.categoryId || !props.categoryId.trim()) {
      throw new InvalidAttributeException('categoryId is required')
    }

    if (!props.categoryName || !props.categoryName.trim()) {
      throw new InvalidAttributeException('categoryName should not be empty')
    }

    this.categoryId = props.categoryId;
    this.categoryName = props.categoryName;
  }

  updatePrice(price: number) {
    const min = 0.01
    const max = 999999999.99

    if (!price) {
      throw new InvalidAttributeException('price is required')
    }

    if (price < min || price > max) {
      throw new InvalidAttributeException(`price must be greater than ${min} and less than ${max}`)
    }

    this.price = price;
  }

  updateAvailability(availability: boolean = true) {
    this.availability = availability;
  }

  addImage(bytes: Buffer, mimetype: string) {
    this.image = new Image({ bytes, mimetype, productId: this.id });
  }
}
