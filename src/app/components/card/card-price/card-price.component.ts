import { Component, Input, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.scss',
})
export class CardPriceComponent implements OnInit {
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';

  constructor() {}

  ngOnInit(): void {}
}
