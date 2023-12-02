
let clicks = 0;
let multi = 1;
let autoClicker = 0;
let autoClickCost = 30;
let multiCost = 10;


function add(){
    
clicks = clicks + multi ;
}
 function showCookies () 
 {   
    document.getElementById("clickcount").innerHTML = 'Clicks = ' + Math.floor (clicks*100)/100;}

function upgrade(){
    
    if (clicks >= multiCost){
    clicks = clicks - multiCost
        multi = multi + 1
        multiCost = multiCost * 2
        document.getElementById("upgradecost").innerHTML = 'Upgrade cost = ' + multiCost;
        document.getElementById("multiinfo").innerHTML = 'Upgrade = '+  multi  + ' units per click!'
    showCookies()
    
} else {
        alert("You don't have enough units!")
    }}
function autoClickerClicked(){

    if (clicks >= autoClickCost){
        clicks = clicks - autoClickCost;
        autoClicker = autoClicker + 1;
        autoClickCost = autoClickCost * 2;
        document.getElementById("autocost").innerHTML = ' Autoclicking cost = ' + autoClickCost
    }else {
        alert("You don't have enough units!")
    }
    
}
setInterval(function (){
    
        clicks = clicks + autoClicker*.1
        showCookies()
    }, 100);