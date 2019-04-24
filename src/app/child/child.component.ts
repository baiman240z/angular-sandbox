import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() price: number;
  @Output() add = new EventEmitter();
  exPrice: number;
  constructor() { }

  ngOnInit() {
  }

  addClick(): void {
    this.add.emit(this.exPrice);
  }
}
