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

  show: boolean = false;

  @HostListener('click') openItem() {
    this.show = !this.show;
    this.item.isNew = false;
  }

  constructor() { }

  ngOnInit() {
  }

  handleDelete() {
    this.deleteClick.emit(this.index);
  }

}
