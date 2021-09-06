var price = document.querySelector("#price");
var quantity = document.querySelector("#quantity");
var presentValue = document.querySelector("#present-value");
var btnTellMe = document.querySelector(".btn-tell-me");
var outputDiv = document.querySelector(".output");

function calculateProfitOrLoss(){
    if(price.value && quantity.value && presentValue.value){
        if(Number(price.value) >0 && Number(quantity.value) > 0 && Number(presentValue.value) > 0){
            var profit = (Number(presentValue.value) - Number(price.value)) * Number(quantity.value);
            if(profit > 0){
                var profitPercentage = (profit/Number(price.value)) * 100
                outputDiv.innerText = "Profit is " + profit + ". Profit Percentage is " + profitPercentage + "%";
            }
            else if(profit < 0){
                var lossPercentage = (-profit/Number(price.value)) * 100
                outputDiv.innerText = "Loss is " + profit*-1 + ". Loss Percentage is " + lossPercentage + "%";
            }
            else{
                outputDiv.innerText = "No Profit No Loss";
            }
        }
        else{
            outputDiv.innerText = "Entered values must be positive";
        }
    }
    else{
        outputDiv.innerText = "Please enter vlaues in all the fields."
    }
}

btnTellMe.addEventListener("click", calculateProfitOrLoss);