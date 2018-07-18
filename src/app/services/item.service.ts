import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../models/item.model';
import { items } from '../../assets/sampleData/items';

interface ItemOperation extends Function {
    (items: Item[]): Item[];
}

const initialItems = items;

@Injectable()
export class ItemService {

    constructor() { }
}