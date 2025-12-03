import { Injectable, signal } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards = signal<Card[]>([
    {
      id: 1,
      pairValue: 1,
      name: 'Cosmos Sentinel, o Guardião Galáctico',
      fundo: 'fundo-1',
      nivel: 5,
      image: 'cosmos.jpg',
      alt: 'Cosmos Sentinel, o Guardião Galáctico',
      descricao:
        'Forjado no coração de uma nebulosa, este guerreiro cibernético é a personificação da harmonia, usando seu escudo para repelir o caos.',
      atk: 2800,
      def: 2500,
    },
    {
      id: 2,
      pairValue: 2,
      name: 'Nebuladragon, o Ser das Estrelas Eternas',
      fundo: 'fundo-2',
      nivel: 7,
      image: 'knight.jpg',
      alt: 'Nebuladragon, o Ser das Estrelas Eternas',
      descricao:
        'Uma criatura mítica nascida da fusão de nebulosas. Suas escamas brilham com a luz de sóis distantes e seu sopro pode forjar galáxias.',
      atk: 3200,
      def: 2000,
    },
    {
      id: 3,
      pairValue: 3,
      name: 'Cyberblade Paladin, o Cavaleiro Digital',
      fundo: 'fundo-3',
      nivel: 3,
      image: 'cyberblade.jpg',
      alt: 'Cyberblade Paladin, o Cavaleiro Digital',
      descricao:
        'Armado com a lendária Cyberblade, este cavaleiro é um protetor jurado dos reinos digitais, defendendo os dados do mainframe universal.',
      atk: 2600,
      def: 2300,
    },
    {
      id: 4,
      pairValue: 4,
      name: 'Mechadragon X, o Destruidor Biomecânico',
      fundo: 'fundo-4',
      nivel: 7,
      image: 'mechadragon.jpg',
      alt: 'Mechadragon X, o Destruidor Biomecânico',
      descricao:
        'Uma fusão de biologia dracônica e engenharia cibernética. Seus canhões de plasma foram criados para vaporizar asteroides.',
      atk: 3500,
      def: 3000,
    },
    {
      id: 5,
      pairValue: 5,
      name: 'Archmage Stellarion, o Guardião das Estrelas',
      fundo: 'fundo-5',
      nivel: 3,
      image: 'magnus.jpg',
      alt: 'Archmage Stellarion, o Guardião das Estrelas',
      descricao:
        'Um mago que manipula as forças do cosmos para proteger o equilíbrio, tecendo feitiços poderosos com poeira estelar.',
      atk: 2400,
      def: 2600,
    },
    {
      id: 6,
      pairValue: 6,
      name: 'Aegis Knight, o Guardião do Firmamento',
      fundo: 'fundo-6',
      nivel: 4,
      image: 'aegis.jpg',
      alt: 'Aegis Knight, o Guardião do Firmamento',
      descricao:
        'Vestindo uma armadura forjada com fragmentos de estrelas, Aegis Knight é um bastião de defesa, capaz de resistir a qualquer ataque.',
      atk: 3000,
      def: 2800,
    },
  ]);

  getCards() {
    return this.cards();
  }
}