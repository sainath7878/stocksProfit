var price = document.querySelector("#price");
var quantity = document.querySelector("#quantity");
var presentValue = document.querySelector("#present-value");
var btnTellMe = document.querySelector(".btn-tell-me");
var outputDiv = document.querySelector(".output");

function calculateProfitOrLoss(){
    outputDiv.style.visibility = "visible";
    if(price.value && quantity.value && presentValue.value){
        if(Number(price.value) >0 && Number(quantity.value) > 0 && Number(presentValue.value) > 0){
            var profit = (Number(presentValue.value) - Number(price.value)) * Number(quantity.value);
            if(profit > 0){
                var profitPercentage = (profit/Number(price.value)) * 100;
                outputDiv.style.color = "#22C55E";
                outputDiv.innerText = "Yaaay! Profit is " + profit + ". Profit Percentage is " + profitPercentage.toFixed(2) + "%";
            }
            else if(profit < 0){
                var lossPercentage = (-profit/Number(price.value)) * 100;
                outputDiv.style.color = "#DC2626";
                outputDiv.innerText = "Oops! Loss is " + profit*-1 + ". Loss Percentage is " + lossPercentage.toFixed(2) + "%";
            }
            else{
                outputDiv.innerText = "No Profit No Loss :)";
            }
        }
        else{
            outputDiv.style.color = "#DC2626";
            outputDiv.innerText = "Entered values must be positive";
        }
    }
    else{
        outputDiv.style.color = "#DC2626";
        outputDiv.innerText = "Please enter values in all the fields."
    }
}

btnTellMe.addEventListener("click", calculateProfitOrLoss);