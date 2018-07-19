import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { items } from '../../assets/sampleData/items';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemService {

    itemList: Item[] = items;

    constructor() {
    }

    getItems(): Observable<Item[]> {
        return of(this.itemList);
    }

    addItem(item: Item) {
        this.itemList.unshift(item);
    }

    removeItem(index: number) {
        this.itemList.splice(index, 1);
    }
}