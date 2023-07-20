let currentNumber = '';
let previousNumber = '';
let operator = '';

let currentDisplayNumber = document.querySelector('.currentNumber');
let previousDisplayNumber = document.querySelector('.previousNumber');


function Limit()
{
    if(currentNumber.length >= 11)
    {
        currentDisplayNumber.textContent = currentNumber.slice(0, 11) + "...";
        currentNumber = currentNumber.slice(0, 11);
    }
}

function funcNumber(number)
{
    currentNumber = currentNumber + number;
    currentDisplayNumber.textContent  = currentNumber;
    Limit();
    
}

const nmbrbtn = document.querySelectorAll('.number');
nmbrbtn.forEach(function(btn)
{
    btn.addEventListener('click', function(e)
    {
        funcNumber(e.target.textContent);
    })
})

function funcOperator(op)
{
    if(currentNumber !== '' && previousNumber !== '')
    {
        compute();
        previousNumber = '';
    }
    operator = op;
        previousDisplayNumber.textContent = currentNumber + " " + operator;
        currentDisplayNumber.textContent  = 00;
        previousNumber = currentNumber;
        currentNumber = '';
}



const  operators = document.querySelectorAll('.operator')
operators.forEach(function(opr)
{
    opr.addEventListener('click', function(e)
    {
        funcOperator(e.target.textContent);
    })
});


function Round()
{
    previousNumber = Math.round(previousNumber * 10000000) / 10000000;
    currentDisplayNumber.textContent = Math.round(currentDisplayNumber.textContent * 1000000) / 10000000;
}


function Limit()
{
    if(currentNumber.length > 11)
    {
        currentNumber = currentNumber.slice(0, 11) + "..."; 
    }
}


function compute()
{
    if(operator === '+')
    {
        previousNumber = Number(previousNumber) + Number(currentNumber);
        
    }
    else if(operator === '-')
    {
        previousNumber = Number(previousNumber) - Number(currentNumber);
        
    }
    else if(operator === 'x')
    {
        previousNumber = Number(previousNumber) * Number(currentNumber);
        
    }
    else if(operator === '÷')
    {
        previousNumber = Number(previousNumber) / Number(currentNumber);
        
    }  
    else if(operator === '%')
    {
        previousNumber = Number(previousNumber) % Number(currentNumber);
    }
    else if(operator === '^')
    {
        previousNumber = Number(previousNumber) ** Number(currentNumber) ;
    }
        // Limit();
        Round();
        currentDisplayNumber.textContent = previousNumber;
        previousDisplayNumber.textContent = '';
        currentNumber = previousNumber;
        previousNumber = '';

    }



function equalSign()
{
    if(currentNumber !== '' && previousNumber !== '')
    {
        compute();
    }
    
}

const equal = document.querySelector('.equal')
equal.addEventListener('click', function()
{
    equalSign();
})


function clear()
{
    
    currentNumber = '';
    previousNumber = '';
    operator = '';
    currentDisplayNumber.textContent = 00;
    previousDisplayNumber.textContent = '';
}

const clearSelector = document.querySelector('.clear')
clearSelector.addEventListener('click', function()
{
    clear();
})

function decimal()
{
    if(currentNumber.includes('.'))
    {
        return
    }
    else
    {
        currentNumber = currentNumber + '.';
        currentDisplayNumber.textContent = currentNumber;
    }
    
}



const decimalSelector  = document.querySelector('.decimal')
decimalSelector.addEventListener('click', function()
{
    decimal();
    
})

function del()
{
    if(currentNumber = previousNumber)
    {
        previousNumber = previousNumber.slice(0, -1);
        currentDisplayNumber.textContent =  currentDisplayNumber.textContent.slice(0, -1);
        currentDisplayNumber.textContent = 0;
        // previousDisplayNumber.textContent = 0;
        
        
    }
    else
    {
        currentNumber = currentNumber.slice(0, -1);
        currentDisplayNumber.textContent = 0 ;
        previousDisplayNumber.textContent = 0 ;
        // currentDisplayNumber.textContent =  currentDisplayNumber.textContent.slice(0, -1);

    }

}

const delte = document.querySelector('.del')
delte.addEventListener('click', function()
{
    del();
})

