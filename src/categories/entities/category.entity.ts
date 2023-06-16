type CategoryProps = {
  id: string;
  name: string;
  enable: boolean;
  show_menu: boolean;
};
export class Category {
  id: string;
  name: string;
  enable: boolean;
  show_menu: boolean;

  constructor(props: CategoryProps) {
    this.id = props.id;
    this.name = props.name;
    this.enable = props.enable;
    this.show_menu = props.show_menu;
  }
}
