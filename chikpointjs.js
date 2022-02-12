//===================================
//Equality	of	three	values//
function equal (a,b,c){
    if(a == b && b == c) return true
    else return false;
}


console.log (equal(1,2,4))
console.log (equal("test","test","test"))

//====================================
//Convert	Minutes	to	seconds//

function minuteConvert (minute){
    return minute*60
}

console.log (minuteConvert(1))

//=====================================
//Return	the	Area of a rectangle//

function area (height,width){
    return height*width
}
console.log (area(2,2))
//=====================================
//The	next	number//
function nextInt (a){
    return a+1
}
console.log (nextInt(1,2))
//======================================
//Football	Points//
function footballPts (wins,draws,defeat){
    return wins* 3 + draws
}
console.log (footballPts(1,2,1))
//======================================
//Between 100	AND	200//
function between (a){
    if(a <100  && a >200) return true
    else return false;
}
console.log (between (50)) 

function between (a){
    if(a>100 && a<200)
     return true
    else return false;
}
console.log (between (120))
//=======================================
//Hours	and	minutes	to	seconds//
function ConvertHourMin (hourMin){
    return 90*60
}
console.log (ConvertHourMin (1,30));
//========================================
//Equality	check//
function EqualityCheck (a,b){
    if(a == b) return true
    else return false; 
}
console.log (EqualityCheck (1,2))
//==================================
function EqualityCheck (a,b){
    if(a == b) return true
    else return false; 
}
console.log (EqualityCheck (6,6))
//==================================
function EqualityCheck (a,b){
    if(a == b) return true
    else return false; 
}
console.log (EqualityCheck (10,10))
//=============================================
//Compare	Strings	by	 Count	of	Characters//
function CompareStrings (a,b){
    if(a<b) return a
    else return b;
}
console.log (CompareStrings ("Go My	Code", "test")); 
//==================================================
//Unique	Chars	count//

function uniqueCharsCount (str){
    let uniq = "";
    for(let i=0; i < str.lenght; i++){
        if(uniq.iclides(str[i])===false){
            uniq += str[i]
        }
    }
    return uniq
}
console.log(uniqueCharsCount("aaaaa"))

const str= 'aaaaa';

const uniqueCount = new Set(str).size;
console.log(uniqueCount);//1
///concatenate fisrt & last name
function Person (){

}
Person.prototype.fname=function(){
    return "John"
}
Person.prototype.lname=function(){
    return "Doe"
}
Person.prototype.fullname=function(){
    return this.fname() + this.lname()
} 
var p = new Person();
console.log(p.fullname())
//Find the index of an item in an array
 const nember = (['2','10','3'],'2');
 console.log(nember.indexOf([2,10,3],2))
 //===========
 const num = (['0','3','20','15'],'7');
 console.log(num.indexOf([0,3,20,15],7))
 //Is in range:isInRange(4,{min:2,max,10}):

function IsInRange (a){
    let result;

    if (a>0){
        result= true
    }else{
        result= false
    }
}
console.log (IsInRange(10,{min:3,max:20}));
//autre solution

//max of an array
var arr = (10,{min:3,max:20});

//alert ("Max value is" + inRange(arr,"Max"));
//alert ("Min value is" + inRange(arr,"Min"));

function inRange(array, selector){
    var val = array[0]; 
    for (var i = 1; i < array.length; i++){
        if (selector == "Min"){
            if(array[i]< val){
                val =array[i];
            }
            retourn= true
        }else if (selector == "Max"){
            if (array[i]> val){
                val = array[i];
            }
            retourn= false
        }
    }
}

console.log(inRange(10,{min:3,max:20}))



// convert a number to a month
function getMonthName(month){
    const d = new Date();
    d.setMonth(month-1);
    const monthName = d.toLocaleString("default", {month: "long"});
    return monthName;
  }
  
  console.log(getMonthName(1)); 
  //
  function getMonthName(month){
    const d = new Date();
    d.setMonth(month-1);
    const monthName = d.toLocaleString("default", {month: "long"});
    return monthName;
  }
  
  console.log(getMonthName(7));






//factorial


//Absolute	Sum
function absoluteSum(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(absoluteSum([2,-1,4,8,10]));
///==============================

function absoluteSum(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(absoluteSum([-2,-2,10]));
//Is	a	number	Symmetrical:
function isSymmetric(obj){
    var obj2= obj;
    if (obj==="") {
      return true;
    } else if (typeof obj === "string") {
      var revd = obj.split("").reverse("").join("");
      return revd === obj;
    } else if (typeof obj === "number") {
      var revd = parseInt(obj.toString().split("").reverse("").join(""));
      return revd === obj;
    } else if (typeof obj === "object") {
      var obj2 = []
      for (var i = obj.length-1; i >= 0; i--) {
        obj2.push(obj[i])
      }
      return obj==obj2;
    }
  }
      
  console.log(isSymmetric([333]));
  ///============================
  function isSymmetri(obj){
    var obj2= obj;
    if (obj==="") {
      return true;
    } else if (typeof obj === "string") {
      var revd = obj.split("").reverse("").join("");
      return revd === obj;
    } else if (typeof obj === "number") {
      var revd = parseInt(obj.toString().split("").reverse("").join(""));
      return revd === obj;
    } else if (typeof obj === "object") {
      var obj2 = []
      for (var i = obj.length-1; i >= 0; i--) {
        obj2.push(obj[i])
      }
      return obj==obj2;
    }
  }
      
  console.log(isSymmetri([1533]));

  //Reverse	the	case
  function reverseCase(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "Go	My	Code".split("");
    // ["G", "o", "M", "y", "C","o","d","e"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["G", "o", "M", "y", "C","o","d","e"].reverse();
   
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
   
    
    //Step 4. Return the reversed string
    return joinArray; 
}
 
reverseCase("Go	My	Code");
console.log(reverseCase("Go	My	Code"));
//==Get	sum	of	people	budget




//Remove	duplicate	in	an	array