export class Item {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    isNew?: boolean;

    constructor(obj: any) {
        this.title = obj && obj.title || "New Item Title";
        this.subtitle = obj && obj.subtitle || "New Item Subtitle";
        this.content = obj && obj.content || "New Item Content";
        this.image = obj && obj.image || "https://picsum.photos/200/300/?random";
        this.isNew = true;
    }
}