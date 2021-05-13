1. Learn About Functional ProgrammingPassed
 /**
* A long process to prepare tea.
* @return {string} A cup of tea.
**/
const prepareTea = () => "greenTea";

/**
* Get given number of cups of tea.
* @param {number} numOfCups Number of required cups of tea.
* @return {Array<string>} Given amount of tea cups.
**/
const getTea = numOfCups => {
 const teaCups = [];

 for (let cups = 1; cups <= numOfCups; cups += 1) {
   const teaCup = prepareTea();
   teaCups.push(teaCup);
 }

 return teaCups;
};

const tea4TeamFCC = getTea(40);


console.log(tea4TeamFCC);




2. Understand Functional Programming Terminology 
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :)
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :)

3. Understand the Hazards of Using Imperative Code
var tabsAfterIndex = this.tabs.splice(index);
var tabsAfterIndex = this.tabs.splice(1);


4. Avoid Mutations and Side Effects Using Functional Programming
return fixedValue + 1;


5.Pass Arguments to Avoid External Dependence in a Function
var fixedValue = 4;
function incrementer (value) {
 return value + 1;

}


6.Refactor Global Variables Out of FunctionsPassed
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

7.Use the map Method to Extract Data from an Array
const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));



8. Implement map on a Prototype
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }


9. Use the filter Method to Extract Data from an Array
var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });


10. Implement the filter Method on a Prototype
let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });


11.Return Part of an Array Using the slice Method
return anim.slice(beginSlice, endSlice);

12.Remove Elements from an Array Using slice Instead of splice
return cities.slice(0, 3);




   


