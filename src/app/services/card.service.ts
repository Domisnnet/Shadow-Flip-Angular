import { Injectable, signal } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards = signal<Card[]>([
    {
      id: 1,
      name: 'Aegis Knight',
      image: 'assets/images/aegis-knight.png' // Caminho CORRETO
    },
    {
      id: 2,
      name: 'Archmage',
      image: 'assets/images/archmage.png' // Caminho CORRETO
    },
    {
      id: 3,
      name: 'Mecha Dragon',
      image: 'assets/images/mechadragon.png' // Caminho CORRETO
    }
  ]);

  getCards() {
    return this.cards();
  }
}
