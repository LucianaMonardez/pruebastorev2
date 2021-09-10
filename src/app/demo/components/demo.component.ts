import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  title = 'pruebastore';

  items = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  power = 10;

  addItem() {
    this.items.push('🍎');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
