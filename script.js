//.slice Array Method
const numbers=[1,2,3,4,5,6];
//displaying array items from index 1 to index 3
const newNumbers=numbers.slice(1,3);
console.log(newNumbers);
//displaying array items from the end
const reverseArray = numbers.slice(-1)
console.log(reverseArray);

//displaying the top 3 winners in a contest
const contestants=["Gideon","Collins","Amos","Isaac","Victor","Evans"];
const winners=contestants.slice(0,3);
console.log(winners);