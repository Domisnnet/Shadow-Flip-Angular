import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardItemComponent]
})
export class CardListComponent {
  cards = input.required<Card[]>();
}
