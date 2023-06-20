type CategoryProps = {
  name: string;
  enable: boolean;
  show_menu: boolean;
};
export class CreateCategoryDto {
  name: string;
  enable: boolean;
  show_menu: boolean;

  constructor(props: CategoryProps) {
    this.name = props.name;
    this.enable = props.enable;
    this.show_menu = props.show_menu;
  }
}
