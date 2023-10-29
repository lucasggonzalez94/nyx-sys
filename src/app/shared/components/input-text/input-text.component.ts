import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input()
  public placeholder: string = '';
  @Input()
  public productName: string = '';

  @Output()
  public onChange = new EventEmitter<string>();

  emitValue(): void {
    this.onChange.emit(this.productName);
  }
}
