// inheritance
class A{
    constructor(a1){
        this.a1=a1;
    }
    present()
    {
        return'first number='+this.a1;
    }
}
class B extends A
{
    constructor(a1,b1)
    {
        super(a1)
        this.b1=b1;
    }
    display()
    {
        //console.log('first number ='+this.present());
        return this.present() + ' second number= ' + this.b1;
    }
}
let obj=new B(6,8);
console.log(obj.display());
