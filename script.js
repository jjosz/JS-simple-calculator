const calc = "<input id = 'screen' type='text' readOnly></input><br/>"+
             "<button onclick='calcFun(7)'>7</button>"+
             "<button onclick='calcFun(8)'>8</button>"+
             "<button onclick='calcFun(9)'>9</button>"+
             "<button onclick='calcFun(`CE`)'>CE</button><br>"+
             "<button onclick='calcFun(4)'>4</button>"+
             "<button onclick='calcFun(5)'>5</button>"+
             "<button onclick='calcFun(6)'>6</button>"+
             "<button onclick='calcFun(`-`)'>-</button><br>"+
             "<button onclick='calcFun(1)'>1</button>"+
             "<button onclick='calcFun(2)'>2</button>"+
             "<button onclick='calcFun(3)'>3</button>"+
             "<button onclick='calcFun(`+`)'>+</button><br/>"+
             "<button onclick='calcFun(`x`)'>x</button>"+
             "<button onclick='calcFun(0)'>0</button>"+
             "<button onclick='calcFun(`/`)'>/</button>"+
             "<button onclick='calcFun(`=`)'>=</button>";

const calculator = document.getElementById('calculator');
calculator.innerHTML = calc;
const screen = document.getElementById('screen');

screen.value="";
let number1=null;
let number2=null;
let eqFlag = false;
let opFlag = false;

function calcFun(x) 
{
    if(eqFlag==false)
    {
    if((typeof x==='number')&&(opFlag==false))
    {
        number1=number1*10+parseFloat(x);
        screen.value=number1;
    }

    else if((typeof x==='number')&&(opFlag==true))
    {
        screen.value=null;
        number2=number2*10+parseFloat(x);
        screen.value=number2;
    }

    else if(x==='=')
    {
        eqFlag=true;
        number1=operators(number1,number2,operator);
        screen.value=number1;
    }

    else if(x==='CE')
    {
        screen.value=null;
        number1=0;
        number2=0;
        operator = null
        opFlag=false;
    }

    else
    {
        operator=x;
        opFlag=true;
    }
    }
    else if((eqFlag==true)&&(x!='='))
    {
        screen.value=null;
        number1=0;
        number2=0;
        operator = null
        opFlag=false;
        eqFlag=false;
        calcFun(x);
    }
    else{
    number1=operators(number1,number2,operator);
    screen.value=number1;
    }
}
function operators(a,b,y)
{
    let value=0;
    if(y==='+')
    value=a+b;
    else if(y==='-')
    value=a-b;
    else if(y==='/')
    value=a/b;
    else if(y==='x')
    value=a*b;
return value;
}