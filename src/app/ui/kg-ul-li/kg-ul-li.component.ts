import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kg-ul-li',
  templateUrl: './kg-ul-li.component.html',
  styleUrls: ['./kg-ul-li.component.css'],
})
export class KgUlLiComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter<void>();
}
