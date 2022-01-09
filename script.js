function compute()
{/* This calculate the interest given an amount a rate and a duration in years
    It returns the result as well as the entered parameters within a set of
    prompt sentences
    */
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // I went for a dictionnary type (sorry I am from python), to use within a loop
    // I could have go for parseFloat for principal too
    var itemList = [
        {'text': 'If you deposit ','val':parseInt(principal)},
        {'text': 'at an interest rate of ','val':parseFloat(rate)},
        {'text': 'You will receive an amount of ','val':parseFloat(interest)},
        {'text': 'in the year ','val':parseInt(year)}
        
       ]
    
    listhtml = document.getElementById("result")
    // The second span has a yellow background color to mimick higlighting of the numerical values
    for(var ctr = 0; ctr < 4; ctr++)
        {
            listhtml.innerHTML+= '<p><span>' + itemList[ctr].text + '</span><span style="background-color:yellow">' + itemList[ctr].val + '</span></p>';
        }
    
}

function updateRate() 
{/* This function connects the sliding range value to the display rate
    */
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validate() 
{/* This function produces an alert if the amount entered is <=0. 
    The alert being synchronous it stop the display of the faulty value.
    Maybe add a time delay?
    When the alert is OK clicked the focus is made on the amount input
    */
    var prin = document.getElementById("principal").value;
    if (prin<=0){
                    alert('Enter a positive number');
                    document.getElementById("principal").value="";
                    document.getElementById("principal").focus();
                    return false;
                }
    
    
}