export class Item {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    isNew?: boolean;
    dateCreated: Date;

    constructor(obj?: any) {
        this.title = obj && obj.title || "New Item Title";
        this.subtitle = obj && obj.subtitle || "New Item Subtitle";
        this.content = obj && obj.content || "Donec semper urna neque, in tincidunt turpis hendrerit tempus. Aliquam erat volutpat. In convallis mauris a semper eleifend. Ut mollis tempus neque id volutpat. Etiam semper, erat eu tincidunt faucibus, massa tortor aliquam ex, sit amet rhoncus velit enim non libero. In quis est a nisl rutrum convallis imperdiet non sem.";
        this.image = obj && obj.image || "https://picsum.photos/75/75/?random";
        this.isNew = true;
        this.dateCreated = obj && obj.dateCreated || new Date();
    }
}