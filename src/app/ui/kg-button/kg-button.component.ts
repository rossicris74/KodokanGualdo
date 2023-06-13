import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kg-button',
  templateUrl: './kg-button.component.html',
  styleUrls: ['./kg-button.component.css'],
})
export class KgButtonComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter<void>();
}
