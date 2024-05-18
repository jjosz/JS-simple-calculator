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

function calcFun(x)
{
    screen.value=screen.value+x;

}