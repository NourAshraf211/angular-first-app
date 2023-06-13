import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent {
  @Input('is-favourite') isFavourite!: boolean;

  OnClick = () => {
    this.isFavourite = !this.isFavourite;
  }
}
