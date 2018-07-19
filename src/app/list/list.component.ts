import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  items$: any;
  items: Item[];
  displayContents: boolean = true;
  newCounter: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items$ = this.itemService.getItems().subscribe(
      items => {
        this.items = items;

        this.items.forEach(i => i.isNew = false);
      }
    );
  }

  ngOnDestroy() {
    this.items$.unsubscribe();
  }

  addListItem() {
    this.itemService.addItem(new Item({
      image: "https://picsum.photos/75/75/?image=" + Math.floor(Math.random() * 100) + 1
    }));
    this.newCounter++;
  }

  deleteListItem(index) {
    this.itemService.removeItem(index);
  }

  handleNewCounter(event) {
    this.newCounter--;
  }

  toggleContents() {
    this.displayContents = !this.displayContents;
  }

}
