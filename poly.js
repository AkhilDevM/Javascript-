// inheritance
class A{
    display()
    {
        console.log("hello");
    }
}
class B extends A
{
    display()
    {
        console.log('world');
    }
}
let obj=new A();
obj.display();
let obj2=new B();
obj2.display();

