import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {

  @Input()
  public redirectTo: string = '';

  @Input()
  public textLink: string = '';

  @Input()
  public onClick: Function = () => {};

  @Input()
  public darkTheme: boolean = false;
}
