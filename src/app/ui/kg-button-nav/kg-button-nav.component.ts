import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kg-button-nav',
  templateUrl: './kg-button-nav.component.html',
  styleUrls: ['./kg-button-nav.component.css'],
})
export class KgButtonNavComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter<void>();
}
