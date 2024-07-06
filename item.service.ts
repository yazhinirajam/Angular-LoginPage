import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com', gender: 'Male' },
    { id: 2, name: 'Jane Smith', phoneNumber: '9876543210', email: 'jane@example.com', gender: 'Female' },
  ];

  private itemsSubject = new BehaviorSubject<Item[]>(this.items);

  constructor() {}

  getItems() {
    return this.itemsSubject.asObservable();
  }

  addItem(item: Item) {
    const newItem: Item = {
      ...item,
      id: this.items.length + 1
    };
    this.items.push(newItem);
    this.itemsSubject.next([...this.items]);
  }

  editItem(id: number, updatedItem: Item) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = {
        ...this.items[index],
        ...updatedItem
      };
      this.itemsSubject.next([...this.items]);
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.itemsSubject.next([...this.items]);
  }
}
