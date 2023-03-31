class Book{
    constructor(page,price){
        this.page=page;
        this.price=price;
        console.log('price of book ='+price);
        console.log('page numbers='+page );
    }
    bname(name)
    {
        this.name=name;
        console.log('book name = '+name);
    }
}
let b1=new Book(20,100);
b1.bname('Mars');
