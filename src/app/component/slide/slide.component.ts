import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-slide',
  imports: [CardItemComponent],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent {
  cards = [
    { image: 'assets/images/aegis-knight.png' },
    { image: 'assets/images/archmage.png' },
    { image: 'assets/images/cosmos-sentinel.png' },
    { image: 'assets/images/cyberblade-paladin.png' },
    { image: 'assets/images/mechadragon.png' },
    { image: 'assets/images/nebuladragon.png' },
    { image: 'assets/images/stormbringer.png' }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}