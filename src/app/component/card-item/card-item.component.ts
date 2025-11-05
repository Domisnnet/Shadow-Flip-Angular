import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
[x: string]: any;
  @Input() cardItem: any;
  @Input() cardIndex!: number;
}