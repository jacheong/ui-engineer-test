import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;
  @Input() index: number;
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() newStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  show: boolean = false;

  @HostListener('click') openItem() {
    this.show = !this.show;
    if (this.item.isNew) {
      this.item.isNew = false;
      this.newStatus.emit(false);
    }

  }

  constructor() { }

  ngOnInit() {
  }

  handleDelete() {
    this.deleteClick.emit(this.index);
    if (this.item.isNew) {
      this.newStatus.emit(false);
    }
  }

}
