export class Item {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;

    constructor(obj: any) {
        this.id = obj && obj.id;
        this.title = obj && obj.title || null;
        this.subtitle = obj && obj.subtitle || null;
        this.content = obj && obj.content || null;
        this.image = obj && obj.image || null;
    }
}