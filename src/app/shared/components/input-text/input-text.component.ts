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
  public initialValue: string = '';

  @Output()
  public onKeyPressEnter = new EventEmitter<string>();

  emitValue(): void {
    this.onKeyPressEnter.emit(this.initialValue);
  }
}
