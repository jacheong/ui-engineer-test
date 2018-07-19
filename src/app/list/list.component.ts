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

}
