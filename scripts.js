/************************************************************
 *                       Functions                          *
 ************************************************************/

/* integer randomizer */
function randomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/* Quick Sort */
var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

function lotteryResults(randomNums, winningNums)
{
    var winningNumsCt = 0;
    for (var i = 0; i < 5; i++) {
        if (randomNums[i] == winningNums[i]) {
            winningNumsCt++;
        }
    }
    return winningNumsCt;
}

function luckyNumResults(luckyNum, winningLuckyNum)
{
    var luckyNumResult = "No lucky match";
    if (luckyNumResult == winningLuckyNum) {
        luckyNumResult = "Lucky match!";
    }
    return luckyNumResult;
}

function payout(result, luckyNumResult)
{
    if(luckyNumResult == true) {
        if (result == 0) {
            return "$4";
        }
        else if (result == 1) {
            return "$6";
        }
        else if (result == 2) {
            return "$25";
        }
        else if (result == 3) {
            return "$150";
        }
        else if (result == 4) {
            return "$5,000";
        }
        else if (result == 5) {
            return "$7,000 a week for life";
        }
    }
    else {
        if (result == 0) {
            return "$0";
        }
        else if (result == 1) {
            return "$0";
        }
        else if (result == 2) {
            return "$3";
        }
        else if (result == 3) {
            return "$20";
        }
        else if (result == 4) {
            return "$200";
        }
        else if (result == 5) {
            return "$25,000 a year for life";
        }
    }
}

/************************************************************
 *                Lottery Implementation                    *
 ************************************************************/

const randomNums = [];
/* create 5 random numbers */
for (var i = 0; i < 5; i++) {
    randomNums[i] = randomInteger(1,48);
}
if (randomNums != null) {
    document.getElementById("randomNums1").innerHTML = randomNums[0];
    document.getElementById("randomNums2").innerHTML = randomNums[1];
    document.getElementById("randomNums3").innerHTML = randomNums[2];
    document.getElementById("randomNums4").innerHTML = randomNums[3];
    document.getElementById("randomNums5").innerHTML = randomNums[4];
}

let luckyNum = randomInteger(1,18);
if (luckyNum != null) {
    document.getElementById("luckyNum").innerHTML = luckyNum;
}

/* sort the array */
sortedArray = quickSort(randomNums, 0, randomNums.length - 1);
if (sortedArray != null) {
    document.getElementById("sortedArray1").innerHTML = sortedArray[0];
    document.getElementById("sortedArray2").innerHTML = sortedArray[1];
    document.getElementById("sortedArray3").innerHTML = sortedArray[2];
    document.getElementById("sortedArray4").innerHTML = sortedArray[3];
    document.getElementById("sortedArray5").innerHTML = sortedArray[4];
}

/* define the winning lottery array */
const winningNums = [12,15,24,35,48,];
let winningLuckyNum = 3;
if (winningNums != null) {
    document.getElementById("winningNums1").innerHTML = winningNums[0];
    document.getElementById("winningNums2").innerHTML = winningNums[1];
    document.getElementById("winningNums3").innerHTML = winningNums[2];
    document.getElementById("winningNums4").innerHTML = winningNums[3];
    document.getElementById("winningNums5").innerHTML = winningNums[4];
}
if (winningLuckyNum != null) {
    document.getElementById("winningLuckyNum").innerHTML = winningLuckyNum;
}

/* results */
var result = lotteryResults(randomNums, winningNums);
if (result != null) {
    document.getElementById("result").innerHTML = result;
}
var luckyNumResult = luckyNumResults(luckyNum, winningLuckyNum);
if (luckyNumResult != null) {
    document.getElementById("luckyNumResult").innerHTML = luckyNumResult;
}

var payout = payout(result, luckyNumResult);
if (payout != null) {
    document.getElementById("payout").innerHTML = payout;
}