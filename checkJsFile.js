function isJavasCript(file) {
   if (typeof (file) !== "string") {
      return "Please enter a string!"
   } else if (file.slice(-3) === '.js') {
      return "Yes! It's a JavaScript file."
   }
   return "No! It's not a JavaScript file."

}
const file = '3423.jsl';
console.log(isJavasCript(file));