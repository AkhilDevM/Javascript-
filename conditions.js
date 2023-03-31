let a=2;
let b=5;
let c=2;
if (a>b) 
{
    console.log(a + ' is greater');    
}
else
{
    console.log(b+ ' is greater')
}

if(a>2)
{
    console.log('a is greater');
}
else if(a>=2)
{
    console.log('a is greter or equal to 2');

}
else
{
    console.log('a is less than 2')
}




switch(c)
{
    default:
        console.log('no matches found');
        break;
    case 0:
        console.log('1');
        break;
    case 1:
        console.log('2');
        break;
    case 2:
        console.log('crct value found 3');
        break;
}