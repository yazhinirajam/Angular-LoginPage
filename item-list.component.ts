import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  addItemForm: FormGroup;
  editItemForm: FormGroup;
  items: any[] = [];
  editingItem: any = null;

  constructor(private fb: FormBuilder) {
    this.addItemForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
    });

    this.editItemForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
    });
  }

  addItem() {
    if (this.addItemForm.valid) {
      this.items.push(this.addItemForm.value);
      this.addItemForm.reset();
    }
  }

  editItem(item: any) {
    this.editingItem = item;
    this.editItemForm.setValue({
      name: item.name,
      phoneNumber: item.phoneNumber,
      email: item.email,
      gender: item.gender,
    });
  }

  updateItem() {
    if (this.editItemForm.valid) {
      const index = this.items.indexOf(this.editingItem);
      this.items[index] = this.editItemForm.value;
      this.editingItem = null;
      this.editItemForm.reset();
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item, index) => index !== id);
  }

  cancelEdit() {
    this.editingItem = null;
    this.editItemForm.reset();
  }
}
