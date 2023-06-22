import { BusinessRuleException } from 'src/_share/business-rule-exception';

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
