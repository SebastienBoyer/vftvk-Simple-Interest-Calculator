function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var itemList = [
        {'text': 'If you deposit ','val':parseInt(principal)},
        {'text': 'at an interest rate of ','val':parseFloat(rate)},
        {'text': 'You will receive an amount of ','val':parseFloat(interest)},
        {'text': 'in the year ','val':parseInt(year)}
        
       ]
    listhtml = document.getElementById("result")
    for(var ctr = 0; ctr < 4; ctr++)
        {
            listhtml.innerHTML+= '<p><span>' + itemList[ctr].text + '</span><span style="background-color:yellow">' + itemList[ctr].val + '</span></p>';
        }
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}