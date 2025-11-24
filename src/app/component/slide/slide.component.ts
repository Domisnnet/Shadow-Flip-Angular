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
    { name: 'Personagem 1', image: 'assets/imagens/aegis-knight.png' },
    { name: 'Personagem 2', image: 'assets/imagens/archmage.png' },
    { name: 'Personagem 3', image: 'assets/imagens/cosmos-sentinel.png' },
    { name: 'Personagem 4', image: 'assets/imagens/cyberblade-paladin.png' },
    { name: 'Personagem 5', image: 'assets/imagens/mechadragon.png' },
    { name: 'Personagem 6', image: 'assets/imagens/nebuladragon.png' },
    { name: 'Personagem 7', image: 'assets/imagens/stormbringer.png' }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}
