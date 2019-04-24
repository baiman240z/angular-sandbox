import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StoreService} from '../store.service';
import {SampleData} from '../sampledata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'Angular samples';
  price: number;
  checked = 'off';
  datalist: object[];

  constructor(
    private router: Router,
    private store: StoreService
  ) {
    this.datalist = SampleData.list;
  }

  ngOnInit() {
    this.price = this.store.getPrice();
  }

  addPrice(exPrice: number): void {
    this.price = this.price * 1 + exPrice * 1;
  }

  goNext(): void {
    this.router.navigate(['next']);
  }

  saveClick(): void {
    this.store.savePrice(this.price);
  }
}
