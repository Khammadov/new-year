
// function ASCII(char = '') {
//     var n = char.charCodeAt(0);
//     return n;
// }

// console.log(ASCII('A'));
// console.log(ASCII('m'));
// console.log(ASCII('['));



// function sameNumber(arr = [], number = 0) {

//     var n = arr;

//     for (var i = 0; i < arr.length; i++) {
//         if (n.includes(number)) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(sameNumber([], 3));





// function inRange(x, min, max) {
//     return ((x-min)*(x-max) <= 0);
// }

// console.log(inRange(2, 1, 5));     
// console.log(inRange(-3, -5, 0));    
// console.log(inRange(30, 20, 29));    






// function sameCase(str = "") {

//     if (str.toLowerCase() === str) {
//         return true;
//     }

//     else if (str.toUpperCase() === str) {
//         return true;
//     }

//     return false;
// }

// console.log(sameCase("HELLO"));
// console.log(sameCase("salam"));
// console.log(sameCase("saLaM"));





// function conTact(arr1 = [], arr2 = []) {
//     var a = arr1;
//     var b = arr2;

//     return arr1.concat(arr2);
// }






// var myDate = new Date(2019,5,1);
// var months=["Jan", "Feb", "March", "Apr", "May", "June","Jule", "Aug", "Sep", "Oct", "Nov", "Dec"]

// console.log(months[myDate.getMonth(2)]);
// console.log(myDate);







// function converting(number = 0) {

//     var text = " - ";


//     for (var i = 1; i <= 60; i++) {
//         var nig = text.repeat(number);
//     }
//     return nig;
// }


// console.log(converting(60));




// function diffMax(arr = []) {

//     for (var i = 0; i < arr.length; i++) {

//         var min = Math.min.apply(Math, arr);
//         var max = Math.max.apply(Math, arr);

//     }

//     return max - min;
// }

// console.log(diffMax([4, 5, 6, 9, 7]));




// function checking(arr = [], number = 0) {

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] >= number) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(checking([1, 2, 3, 4, 5, 6, 7,], 10));





function WordCount(str) {
    var totalSoFar = 0;
    for (var i = 0; i < WordCount.length; i++)
      if (str[i] === " ") { 
        totalSoFar = +1; 
    }
    totalsoFar += 1; 
  }
  
  console.log(WordCount("Random String"));
  
