import { InvalidAttributeException } from 'src/_share/invalid-attribute-exception';

export type CategoryProps = {
  id?: string;
  name: string;
  enable: boolean;
  show_menu: boolean;
};

export class Category {
  id?: string;
  name: string;
  enable: boolean;
  show_menu: boolean;

  constructor(props: CategoryProps) {
    this.id = props.id;
    this.updateName(props.name);
    this.updateEnable(props.enable);
    this.updateShowMenu(props.show_menu);
  }

  updateName(name: string) {
    if (!name || !name.trim()) {
      throw new InvalidAttributeException('name should not be empty');
    }

    this.name = name;
  }

  updateEnable(enable = true) {
    this.enable = enable;
  }

  updateShowMenu(showMenu = false) {
    this.show_menu = showMenu;
  }
}
