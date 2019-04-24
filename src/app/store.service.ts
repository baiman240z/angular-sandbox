import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  savedPrice: number;

  constructor() {
    this.savedPrice = 0;
  }

  savePrice(price: number) {
    this.savedPrice = price;
  }

  getPrice(): number {
    return this.savedPrice;
  }

}
