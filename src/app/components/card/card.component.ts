import { Component, Input, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPriceComponent } from './card-price/card-price.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AngularMaterialModule, CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';

  constructor() {}

  ngOnInit(): void {}
}
