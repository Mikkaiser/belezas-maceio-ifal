import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-card-component',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() cardText!: string;

  constructor() {}

  ngOnInit(): void {}
}
