import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
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
