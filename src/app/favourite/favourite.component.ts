import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  inputs: ['isFavourite']
})
export class FavouriteComponent {
  isFavourite!: boolean;

  OnClick = () => {
    this.isFavourite = !this.isFavourite;
  }
}
