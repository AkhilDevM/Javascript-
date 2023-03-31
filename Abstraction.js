//abstraction
function calc(a,b)
{
    this.a=a;
    this.b=b;
    let bal=0;
    let sum=0;

    let add =()=>{
         sum=a+b;
    }

    let sub=()=>{
         bal=a-b;
    }

    this.disp=()=>
    {
        add();
        sub();
        console.log('sum='+sum);
        console.log('balance='+bal);

    }
}

let obj=new calc(1,2);
obj.disp();

