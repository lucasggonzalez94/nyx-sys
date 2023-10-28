import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input()
  public title: string = '';
}
