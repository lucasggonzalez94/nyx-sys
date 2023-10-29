import { Component, EventEmitter, Output } from '@angular/core';
import { Name } from 'src/app/products/interfaces/products.interface';

@Component({
  selector: 'shared-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
  public categoriesOptions = Object.values(Name);
  public selectedCategory: string = 'Selecciona categoría';

  @Output()
  public onChange = new EventEmitter<string>();

  emitValue(): void {
    this.onChange.emit(this.selectedCategory);
  }
}
