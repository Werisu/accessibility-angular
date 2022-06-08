import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> | null = null

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT)?.focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT)?.focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT)?.focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT)?.focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective | null {
    const items = this.items?.toArray();
    const curentSelectedIndex: number = items?.findIndex(item => item.isFocused()) as number;
    if(items){
      const targetElementFocus = items[curentSelectedIndex + direction];
      if (targetElementFocus) {
        return targetElementFocus;
      }

      return direction ===  ArrowDirection.LEFT
        ? items[items?.length -1]
        : items[0];
    }

    return null;
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}
