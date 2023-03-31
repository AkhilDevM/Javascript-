class Dev
{
    constructor(name,no)
    {
        this.name=name;
        this.no=no;

    }
    place(state)
    {
        this.state=state;
    }
    details()
    {
        console.log("name and roll no and place= "+this.name,this.no,this.state);
    }
}
let obj = new Dev('Akhil dev',08);
obj.place('kerala');
obj.details();

