import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText: string = '';

  onMouseEnter() {
    // Lógica para el evento hover (mouse enter)
  }

  onMouseLeave() {
    // Lógica para el evento hover (mouse leave)
  }
}
