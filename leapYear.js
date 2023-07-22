


function isLeaper(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
   }
   return false;
}

const years = [1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2022];

let i = 0;

// By while loop 
// while (i < years.length) {

//    const element = years[i]
//    console.log(element);

//    i++;
// }


// By for loop 
for (let i = 0; i < years.length; i++) {
   const year = years[i];
   // console.log(year);
   const result = isLeaper(year);
   if (result) {
      console.log(year + ' is leap year');
   }
   else {
      console.log(year + ' is not leap year');
   }
}


function getCelsius(f) {
   return ((f - 32) * 5 / 9);
}

function getFahrenheit(c) {
   return ((c * 9 / 5) + 32);
}

console.log(getCelsius(30));
console.log(getFahrenheit(40));
const a = parseFloat()





